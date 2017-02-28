import MovieModel from '../models/MovieModel';
const movieController = {};

movieController.list = function (request, response, next) {
  MovieModel.find({}).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      next(err);
    });
};

movieController.show = function (request, response, next) {
  MovieModel.findById({}).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      next(err);
    });
};

movieController.create = function (request, response, next) {
  const movie = new MovieModel({
    id: request.body.id,
    title: request.body.title,
    originalTitle: request.body.original_title,
    overview: request.body.overview,
    releaseDate: request.body.release_date,
    voteAverage: request.body.vote_average,
    voteCount: request.body.vote_count,
    posterPath: request.body.poster_path
  });

  movie.save().then(newMovie => {
    return response.json(newMovie);
  })
  .catch(err => {
    next(err);
  });
};

movieController.remove = function (request, response, next) {
  MovieModel.findByIdAndRemove(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

export default movieController;
