import React, { useState, useEffect } from 'react';
import { Movie } from '../../types';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Chip,
  Grid,
  InputLabel
} from '@mui/material';

interface MovieFormProps {
  movie?: Movie | null;
  onSubmit: (movie: Movie) => void;
  onCancel: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ movie, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Movie>>(
    movie || {
      title: '',
      description: '',
      imageUrl: '',
      rating: 0,
      popularity: 0,
      price: 0,
      genres: [],
      industry: '',
      releaseDate: '',
      trailerUrl: '',
      reviews: [],
      insights: {
        boxOffice: '',
        awards: [],
        trivia: [],
        cast: [],
        crew: []
      },
      tags: []
    }
  );

  const [newGenre, setNewGenre] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenreAdd = () => {
    if (newGenre && !formData.genres?.includes(newGenre)) {
      setFormData((prev) => ({
        ...prev,
        genres: [...(prev.genres || []), newGenre]
      }));
      setNewGenre('');
    }
  };

  const handleTagAdd = () => {
    if (newTag && !formData.tags?.includes(newTag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag]
      }));
      setNewTag('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Movie);
  };

  return (
    <Dialog open={true} maxWidth="md" fullWidth>
      <DialogTitle>{movie ? 'Edit Movie' : 'Add New Movie'}</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Trailer URL"
                name="trailerUrl"
                value={formData.trailerUrl}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="number"
                label="Rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                inputProps={{ min: 0, max: 10, step: 0.1 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="number"
                label="Popularity"
                name="popularity"
                value={formData.popularity}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="number"
                label="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                inputProps={{ min: 0, step: 0.01 }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Genres</InputLabel>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                {formData.genres?.map((genre) => (
                  <Chip
                    key={genre}
                    label={genre}
                    onDelete={() =>
                      setFormData((prev) => ({
                        ...prev,
                        genres: prev.genres?.filter((g) => g !== genre)
                      }))
                    }
                  />
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  label="Add Genre"
                  value={newGenre}
                  onChange={(e) => setNewGenre(e.target.value)}
                />
                <Button onClick={handleGenreAdd}>Add</Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Tags</InputLabel>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                {formData.tags?.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    onDelete={() =>
                      setFormData((prev) => ({
                        ...prev,
                        tags: prev.tags?.filter((t) => t !== tag)
                      }))
                    }
                  />
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  label="Add Tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                />
                <Button onClick={handleTagAdd}>Add</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {movie ? 'Save Changes' : 'Add Movie'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieForm;
