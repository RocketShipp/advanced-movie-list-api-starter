import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  id: {
    required: true,
    type: Number
  },
  title: {
    required: true,
    type: String
  },
  originalTitle: {
    required: true,
    type: String
  },
  overview: {
    required: true,
    type: String
  },
  releaseDate: {
    required: true,
    type: String
  },
  voteAverage: {
    required: true,
    type: Number
  },
  voteCount: {
    required: true,
    type: Number
  },
  posterPath: {
    required: true,
    type: String
  },
});

export default mongoose.model('Movie', movieSchema);
