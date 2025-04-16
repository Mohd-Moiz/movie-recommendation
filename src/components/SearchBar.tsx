import React, { useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export type SearchCriteria = 'title' | 'actor' | 'director' | 'genre';

interface SearchBarProps {
  onSearch: (searchTerm: string, criteria: SearchCriteria) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>('title');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm, searchCriteria);
  };

  const handleCriteriaChange = (event: any) => {
    const newCriteria = event.target.value as SearchCriteria;
    setSearchCriteria(newCriteria);
    onSearch(searchTerm, newCriteria);
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{ width: '100%', mb: 3 }}
    >
      <TextField
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search movies..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl sx={{ minWidth: { xs: '100%', sm: 200 } }}>
        <InputLabel>Search by</InputLabel>
        <Select
          value={searchCriteria}
          onChange={handleCriteriaChange}
          label="Search by"
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="actor">Actor</MenuItem>
          <MenuItem value="director">Director</MenuItem>
          <MenuItem value="genre">Genre</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default SearchBar;
