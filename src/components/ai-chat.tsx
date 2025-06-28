"use client"

import React, { useState, useRef, useEffect, FormEvent, KeyboardEvent } from 'react';
import { IconButton, TextField, Avatar, CircularProgress, Grid, Paper, Box, Typography } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import MovieCard from './MovieCard';
import BookingDialog from './BookingDialog';
import { fetchPopularMovies, searchMovies, fetchGenres, discoverAdvancedMovies, searchPerson, fetchMovieDetails, fetchMovieVideos, TmdbMovie, Genre } from '../api/tmdb';
import { Movie } from '../types/Movie';
import { useAuth } from '../contexts/AuthContext';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface Message {
  role: "user" | "assistant";
  content: string;
  movies?: Movie[];
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your movie assistant. I can help you discover new movies, provide information about films, actors, and directors, and assist with booking tickets. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [genresList, setGenresList] = useState<Genre[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  // Voice recognition & booking state
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  useEffect(() => { setInput(transcript); }, [transcript]);
  const [selectedMovie, setSelectedMovie] = useState<Movie|null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBook = (m: Movie) => { setSelectedMovie(m); setBookingOpen(true); };
  const closeBooking = () => { setBookingOpen(false); setSelectedMovie(null); };
  // Speak assistant replies
  useEffect(() => {
    const last = messages[messages.length-1];
    if (last?.role==='assistant') {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(last.content));
    }
  }, [messages]);

  useEffect(() => {
    fetchGenres().then(setGenresList).catch(console.error);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")

    setIsLoading(true);
    try {
      const term = input.trim();
      // Insights request
      const i = term.match(/(?:tell me about|details of|insights? of)\s+(.+)/i);
      if (i) {
        const name = i[1].trim();
        const res = await searchMovies(name);
        if (res.length) {
          const d = await fetchMovieDetails(res[0].id);
          const v = await fetchMovieVideos(res[0].id);
          const key = v.find(x=>x.site==='YouTube')?.key;
          const info = `Title: ${d.title}\nOverview: ${d.overview}\nGenres: ${d.genres.map(g=>g.name).join(', ')}\nRuntime: ${d.runtime} min\nRelease: ${d.release_date}\nRevenue: $${d.revenue}\nTrailer: ${key?`https://youtu.be/${key}`:''}`;
          setMessages(prev=>[...prev,{role:'assistant',content:info}]);
        } else setMessages(prev=>[...prev,{role:'assistant',content:`No details for "${name}".`}]);
        return;
      }
      // Booking request
      const b = term.match(/book(?: tickets)? for\s+(.+)/i);
      if (b) {
        const nm = b[1].trim();
        const r = await searchMovies(nm);
        if (r.length) {
          const tm = r[0];
          const mv: Movie = { id: tm.id, title: tm.title, description: tm.overview, imageUrl: tm.poster_path?`https://image.tmdb.org/t/p/w500${tm.poster_path}`:'', rating: tm.vote_average, price: Number((Math.random()*(500-150)+150).toFixed(2)), genres: [], industry:'Movie', insights:{boxOffice:'N/A',awards:[],trivia:[],cast:[],crew:[]} };
          handleBook(mv);
          setMessages(prev=>[...prev,{role:'assistant',content:`Booking tickets for "${mv.title}".`}]);
        } else setMessages(prev=>[...prev,{role:'assistant',content:`Couldn't find "${nm}".`}]);
        return;
      }
      // Parse filters: genres, actors, directors, year, rating
      const interestTerms = term.split(/,| and /).map(t => t.trim().toLowerCase());
      const genreIds = genresList
        .filter(g => interestTerms.includes(g.name.toLowerCase()))
        .map(g => g.id);

      const yearMatch = term.match(/\b(19|20)\d{2}\b/);
      const year = yearMatch ? parseInt(yearMatch[0]) : undefined;

      const ratingMatch = term.match(/rating\s*(?:above|over|>|>=)\s*(\d+(?:\.\d+)?)/i);
      const minRating = ratingMatch ? parseFloat(ratingMatch[1]) : undefined;

      const actorMatch = term.match(/(?:starring|with|featuring)\s+([A-Za-z ]+)/i);
      const actorName = actorMatch ? actorMatch[1].trim() : undefined;
      let actorIds: number[] = [];
      if (actorName) {
        const persons = await searchPerson(actorName);
        actorIds = persons.slice(0, 3).map(p => p.id);
      }

      const directorMatch = term.match(/directed by\s+([A-Za-z ]+)/i);
      const directorName = directorMatch ? directorMatch[1].trim() : undefined;
      let directorIds: number[] = [];
      if (directorName) {
        const persons = await searchPerson(directorName);
        directorIds = persons.slice(0, 3).map(p => p.id);
      }

      let tmdbMovies: TmdbMovie[] = [];
      let showMovies = false;
      if (genreIds.length || actorIds.length || directorIds.length || year || minRating) {
        tmdbMovies = await discoverAdvancedMovies({ genreIds, actorIds, directorIds, year, minRating });
        showMovies = true;
        if (!tmdbMovies.length && term) tmdbMovies = await searchMovies(term);
      } else if (term) {
        tmdbMovies = await searchMovies(term);
        showMovies = true;
      } else {
        tmdbMovies = await fetchPopularMovies();
        showMovies = true;
      }

      if (showMovies && tmdbMovies.length) {
        const suggestions: Movie[] = tmdbMovies.slice(0,5).map(tmdb => ({
          id: tmdb.id,
          title: tmdb.title,
          description: tmdb.overview,
          imageUrl: tmdb.poster_path ? `https://image.tmdb.org/t/p/w500${tmdb.poster_path}` : '',
          rating: tmdb.vote_average,
          price: Number((Math.random() * (500 - 150) + 150).toFixed(2)),
          genres: [],
          industry: 'Movie',
          insights: { boxOffice: 'N/A', awards: [], trivia: [], cast: [], crew: [] },
        }));
        setMessages(prev => [...prev, { role: 'assistant', content: suggestions.length ? `Top 5 movies for "${term}":` : 'No movies found.', movies: suggestions }]);
        return;
      }
      // Fallback: general chat
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      if (!response.ok) throw new Error("Failed to fetch chat response");
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      return;
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, failed to fetch suggestions.' }]);
    } finally {
      setIsLoading(false);
    }
    return;
  }

  return (
    <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: { xs: 600, md: 700 }, overflow: 'hidden', borderRadius: 2 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          <MovieIcon sx={{ mr: 1 }} /> Movie AI Assistant
        </Typography>
      </Box>

      <Box sx={{ flex: 1, overflowY: 'auto', p: 2, '& > * + *': { mt: 2 } }}>
        {messages.map((message, index) => {
          if (message.movies) {
            return (
              <div key={index} className="w-full">
                <p className="mb-2 font-semibold">{message.content}</p>
                <Grid container spacing={2}>
                  {message.movies.map(movie => (
                    <Grid item xs={12} sm={6} md={4} key={movie.id}>
                      <MovieCard movie={movie} onClick={() => handleBook(movie)} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            )
          }
          return (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <Avatar>
                  {message.role === 'user' ? <PersonIcon /> : <MovieIcon />}
                </Avatar>
                <div
                  className={`rounded-lg p-4 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            </div>
          )
        })}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[80%]">
              <Avatar>
                <MovieIcon />
              </Avatar>
              <div className="rounded-lg p-4 bg-muted flex items-center">
                <CircularProgress size={20} />
                <span className="ml-2">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, borderTop: 1, borderColor: 'divider', display: 'flex', gap: 2 }}>
        <IconButton onClick={() => listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ continuous: true })}>
          {listening ? <MicOffIcon /> : <MicIcon />}
        </IconButton>
        <TextField
          multiline
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about movies, recommendations, or booking..."
          className="min-h-[60px] resize-none"
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
            }
          }}
        />
        <IconButton type="submit" disabled={isLoading || !input.trim()} color="primary">
          <SendIcon />
        </IconButton>
      </Box>
      {selectedMovie && (
        <BookingDialog open={bookingOpen} onClose={closeBooking} movie={selectedMovie} />
      )}
    </Paper>
  )
}

export {};
