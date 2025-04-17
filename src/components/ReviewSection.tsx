import React, { useState } from 'react';
import {
  Box,
  Typography,
  Rating,
  TextField,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ThumbUp as ThumbUpIcon,
  ThumbUpOutlined as ThumbUpOutlinedIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Movie, Review } from '../types';


interface ReviewSectionProps {
  movieId: number;
  reviews: Review[];
  userRating?: number;
  currentUserId: string;
  onAddReview: (rating: number, comment: string) => void;
  onEditReview: (reviewId: string, rating: number, comment: string) => void;
  onDeleteReview: (reviewId: string) => void;
  onLikeReview: (reviewId: string) => void;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  movieId,
  reviews,
  userRating,
  currentUserId,
  onAddReview,
  onEditReview,
  onDeleteReview,
  onLikeReview,
}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [newRating, setNewRating] = useState<number | null>(userRating || null);
  const [newComment, setNewComment] = useState('');
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [editRating, setEditRating] = useState<number>(0);
  const [editComment, setEditComment] = useState('');

  const handleSubmitReview = () => {
    if (newRating !== null && newComment.trim()) {
      onAddReview(newRating, newComment.trim());
      setNewComment('');
    }
  };

  const handleStartEdit = (review: Review) => {
    setEditingReviewId(review.id);
    setEditRating(review.rating);
    setEditComment(review.comment);
  };

  const handleSaveEdit = () => {
    if (editingReviewId && editComment.trim()) {
      onEditReview(editingReviewId, editRating, editComment.trim());
      setEditingReviewId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>

      {/* Add Review Section */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Add Your Review
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Rating
            value={newRating}
            onChange={(_, value) => setNewRating(value)}
            precision={0.5}
            size="large"
          />
        </Box>
        <TextField
          fullWidth
          multiline
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your review here..."
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitReview}
          disabled={!newRating || !newComment.trim()}
        >
          Submit Review
        </Button>
      </Paper>

      {/* Reviews List */}
      <List>
        {reviews.map((review, index) => (
          <React.Fragment key={review.id}>
            {index > 0 && <Divider component="li" />}
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                review.userId === currentUserId && (
                  <Box>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleStartEdit(review)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => onDeleteReview(review.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                )
              }
            >
              <ListItemAvatar>
                <Avatar>{review.userName[0]}</Avatar>
              </ListItemAvatar>
              {editingReviewId === review.id ? (
                <Box sx={{ flex: 1, ml: 2 }}>
                  <Rating
                    value={editRating}
                    onChange={(_, value) => value && setEditRating(value)}
                    precision={0.5}
                    sx={{ mb: 1 }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSaveEdit}
                      disabled={!editComment.trim()}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setEditingReviewId(null)}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              ) : (
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography component="span" variant="subtitle1">
                        {review.userName}
                      </Typography>
                      <Rating value={review.rating} readOnly size="small" />
                    </Box>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {review.comment}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mt: 1,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(review.createdAt)}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                          }}
                        >
                          <IconButton
                            size="small"
                            onClick={() => onLikeReview(review.id)}
                          >
                            {review.likes > 0 ? (
                              <ThumbUpIcon fontSize="small" />
                            ) : (
                              <ThumbUpOutlinedIcon fontSize="small" />
                            )}
                          </IconButton>
                          <Typography variant="caption">
                            {review.likes}
                          </Typography>
                        </Box>
                      </Box>
                    </React.Fragment>
                  }
                />
              )}
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ReviewSection;
