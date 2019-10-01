const express = require('express');
const TvShow = require('./TvShow');
const TvShowService = require('./tvShowService');
const tvShowRouter = express.Router();
//const tvShows = [];
//const tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama'), new TvShow(3, 'Mindhunter', 'Thriller')];

tvShowRouter.get('/', (req, res) => {
  res.json(TvShowService.getAll());
});

tvShowRouter.get('/:tvShowId', (req, res) => {
  const tvShowId = req.params.tvShowId;
  const tvShow = TvShowService.getById(tvShowId);
  console.log(`Fetching TV Show with id: ${tvShowId}`);
  res.json(tvShow);
});

tvShowRouter.post('/', (req, res) => {
  const tvShowName = req.body.name;
  const tvShowGenre = req.body.genre;
  const newTvShow = TvShowService.createTvShow(tvShowName, tvShowGenre);
  res.json(newTvShow);
});

module.exports = tvShowRouter;
