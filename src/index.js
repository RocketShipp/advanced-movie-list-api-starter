import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import MovieRoute from './routes/MovieRoute';

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

app.use(bodyParser.json());
app.use(MovieRoute);

/* eslint no-unused-vars: 0 */
app.use(function (err, request, res, next) {
  return res.status(500).send(`Whoops... mistakes were made. ${err}`);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('ERROR! ', err);
  }
  return console.log('Listening on http://localhost:' + PORT);
});
