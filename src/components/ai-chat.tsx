"use client"

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { IconButton, TextField, Avatar, CircularProgress, Grid, Paper, Box, Typography, Snackbar, Alert } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import MovieCard from './MovieCard';
import BookingDialog from './BookingDialog';
import { fetchPopularMovies, searchMovies, fetchGenres, discoverAdvancedMovies, searchPerson, fetchMovieDetails, fetchMovieVideos, TmdbMovie, Genre } from '../api/tmdb';
import { Movie } from '../types/Movie';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface Message {
  role: "user" | "assistant";
  content: string;
  movies?: Movie[];
  trailerUrl?: string;
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
  const [selectedMovie, setSelectedMovie] = useState<Movie|null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: '' });

  // Voice recognition
  const { transcript, listening } = useSpeechRecognition();
  useEffect(() => { setInput(transcript); }, [transcript]);

  useEffect(() => { fetchGenres().then(setGenresList).catch(console.error); }, []);

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }
  useEffect(() => { scrollToBottom() }, [messages])

  const handleBook = (m: Movie) => { setSelectedMovie(m); setBookingOpen(true); };
  const closeBooking = () => { setBookingOpen(false); setSelectedMovie(null); };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    const userMessage: Message = { role: "user", content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true);
    try {
      const term = input.trim();
      // 1. Watch/Play Trailer
      const watchMatch = term.match(/(?:watch|play|trailer for)\s+(.+)/i);
      if (watchMatch) {
        const name = watchMatch[1].trim();
        const res = await searchMovies(name);
        if (res.length) {
          const d = await fetchMovieDetails(res[0].id);
          const v = await fetchMovieVideos(res[0].id);
          const key = v.find(x=>x.site==='YouTube')?.key;
          if (key) {
            setMessages(prev=>[...prev,{role:'assistant',content:`Here is the trailer for "${d.title}":`,trailerUrl:`https://www.youtube.com/embed/${key}`}]);
          } else {
            setMessages(prev=>[...prev,{role:'assistant',content:`Sorry, no trailer found for "${d.title}".`}]);
          }
        } else setMessages(prev=>[...prev,{role:'assistant',content:`No movie found for "${name}".`}]);
        setIsLoading(false); return;
      }
      // 2. Movie Details
      const i = term.match(/(?:tell me about|details of|insights? of)\s+(.+)/i);
      if (i) {
        const name = i[1].trim();
        const res = await searchMovies(name);
        if (res.length) {
          const d = await fetchMovieDetails(res[0].id);
          const v = await fetchMovieVideos(res[0].id);
          const key = v.find(x=>x.site==='YouTube')?.key;
          const info = `Title: ${d.title}\nOverview: ${d.overview}\nGenres: ${d.genres.map(g=>g.name).join(', ')}\nRuntime: ${d.runtime} min\nRelease: ${d.release_date}\nRevenue: $${d.revenue}`;
          setMessages(prev=>[...prev,{role:'assistant',content:info,trailerUrl:key?`https://www.youtube.com/embed/${key}`:undefined}]);
        } else setMessages(prev=>[...prev,{role:'assistant',content:`No details for "${name}".`}]);
        setIsLoading(false); return;
      }
      // 3. Booking
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
        setIsLoading(false); return;
      }
      // 4. Movie Discovery (genre/year/actor)
      const interestTerms = term.split(/,| and /).map(t => t.trim().toLowerCase());
      const genreIds = genresList.filter(g => interestTerms.includes(g.name.toLowerCase())).map(g => g.id);
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
        setIsLoading(false); return;
      }
      // 5. Fallback: general chat
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      if (!response.ok) throw new Error("Failed to fetch chat response");
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setSnackbar({ open: true, message: 'Sorry, failed to fetch suggestions.' });
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, failed to fetch suggestions.' }]);
    } finally {
      setIsLoading(false);
    }
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
              <div key={index} style={{ width: '100%' }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>{message.content}</Typography>
                <Grid container spacing={2}>
                  {message.movies.map(movie => (
                    <Grid item xs={12} sm={6} md={4} key={movie.id}>
                      <MovieCard movie={movie} onClick={() => handleBook(movie)} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            );
          }
          if (message.trailerUrl) {
            return (
              <div key={index} style={{ width: '100%' }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>{message.content}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <iframe width="360" height="215" src={message.trailerUrl} title="YouTube trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Box>
              </div>
            );
          }
          return (
            <Box key={index} sx={{ display: 'flex', justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, maxWidth: '80%' }}>
                {message.role === 'user' ? <Avatar><PersonIcon /></Avatar> : <Avatar sx={{ bgcolor: 'primary.main' }}><MovieIcon /></Avatar>}
                <Paper sx={{ p: 1.5, bgcolor: message.role === 'user' ? 'grey.100' : 'primary.light', color: message.role === 'user' ? 'text.primary' : 'primary.contrastText', borderRadius: 2, boxShadow: 1, fontSize: 16, whiteSpace: 'pre-line' }}>{message.content}</Paper>
              </Box>
            </Box>
          );
        })}
        <div ref={messagesEndRef} />
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress size={32} />
          </Box>
        )}
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', p: 2, borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <IconButton onClick={() => SpeechRecognition.startListening({ continuous: false, language: 'en-US' })} color={listening ? 'primary' : 'default'}>
          {listening ? <MicIcon /> : <MicOffIcon />}
        </IconButton>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          sx={{ mx: 2 }}
          disabled={isLoading}
        />
        <IconButton type="submit" color="primary" disabled={isLoading || !input.trim()}>
          <SendIcon />
        </IconButton>
      </Box>
      {selectedMovie && (
        <BookingDialog open={bookingOpen} movie={selectedMovie} onClose={closeBooking} />
      )}
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ open: false, message: '' })}>
        <Alert severity="error" sx={{ width: '100%' }}>{snackbar.message}</Alert>
      </Snackbar>
    </Paper>
  );
}

export {};
