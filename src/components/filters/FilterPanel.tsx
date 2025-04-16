import React from 'react';
import {
  Box,
  Chip,
  Drawer,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Slider,
  Divider
} from '@mui/material';

interface FilterPanelProps {
  open: boolean;
  onClose: () => void;
  genres: string[];
  selectedGenres: string[];
  onGenreChange: (genre: string) => void;
  tags: string[];
  selectedTags: string[];
  onTagChange: (tag: string) => void;
  ratingRange: [number, number];
  onRatingRangeChange: (range: [number, number]) => void;
  yearRange: [number, number];
  onYearRangeChange: (range: [number, number]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  open,
  onClose,
  genres,
  selectedGenres,
  onGenreChange,
  tags,
  selectedTags,
  onTagChange,
  ratingRange,
  onRatingRangeChange,
  yearRange,
  onYearRangeChange
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 300, p: 3 }
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Genres
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {genres.map((genre) => (
            <Chip
              key={genre}
              label={genre}
              onClick={() => onGenreChange(genre)}
              color={selectedGenres.includes(genre) ? 'primary' : 'default'}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Tags
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onClick={() => onTagChange(tag)}
              color={selectedTags.includes(tag) ? 'primary' : 'default'}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Rating
        </Typography>
        <Slider
          value={ratingRange}
          onChange={(_, newValue) => onRatingRangeChange(newValue as [number, number])}
          valueLabelDisplay="auto"
          min={0}
          max={10}
          step={0.5}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption">{ratingRange[0]}</Typography>
          <Typography variant="caption">{ratingRange[1]}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Release Year
        </Typography>
        <Slider
          value={yearRange}
          onChange={(_, newValue) => onYearRangeChange(newValue as [number, number])}
          valueLabelDisplay="auto"
          min={1900}
          max={new Date().getFullYear()}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption">{yearRange[0]}</Typography>
          <Typography variant="caption">{yearRange[1]}</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterPanel;
