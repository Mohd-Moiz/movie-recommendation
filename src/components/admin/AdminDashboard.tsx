import React, { useState } from 'react';
import { Movie, AdminUser } from '../../types';
import { Box, Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import MovieForm from './MovieForm';

interface AdminDashboardProps {
  currentUser: AdminUser;
  movies: Movie[];
  onAddMovie: (movie: Movie) => void;
  onEditMovie: (id: number, movie: Movie) => void;
  onDeleteMovie: (id: number) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  movies,
  onAddMovie,
  onEditMovie,
  onDeleteMovie
}) => {
  const [isAddingMovie, setIsAddingMovie] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" component="h2">
                Movie Management
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsAddingMovie(true)}
              >
                Add New Movie
              </Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Release Date</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Genres</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {movies.map((movie) => (
                    <TableRow key={movie.id}>
                      <TableCell>{movie.title}</TableCell>
                      <TableCell>{movie.releaseDate}</TableCell>
                      <TableCell>{movie.rating}</TableCell>
                      <TableCell>{movie.genres.join(', ')}</TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          onClick={() => setEditingMovie(movie)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          color="error"
                          onClick={() => onDeleteMovie(movie.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      {(isAddingMovie || editingMovie) && (
        <MovieForm
          movie={editingMovie}
          onSubmit={(movie) => {
            if (editingMovie) {
              onEditMovie(editingMovie.id, movie);
            } else {
              onAddMovie(movie);
            }
            setIsAddingMovie(false);
            setEditingMovie(null);
          }}
          onCancel={() => {
            setIsAddingMovie(false);
            setEditingMovie(null);
          }}
        />
      )}
    </Container>
  );
};

export default AdminDashboard;
