const express = require('express');
const TvShow = require('./TvShow');
const TvShowService = require('./tvShowService');
const tvShowRouter = express.Router();
//const tvShows = [];
//const tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama'), new TvShow(3, 'Mindhunter', 'Thriller')];

tvShowRouter.get('/', (req, res) => {
  res.json(TvShowService.getAll());
});

module.exports = tvShowRouter;
