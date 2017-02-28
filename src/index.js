import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import MovieRoute from './routes/MovieRoute';

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

app.use(bodyParser.json());
app.use(MovieRoute);

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('ERROR! ', err);
  }
  return console.log('Listening on http://localhost:' + PORT);
});
