const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
  constructor() {
    this.tvShows = [new TvShow(createId(), 'Mr.Robot', 'Drama'), new TvShow(createId(), 'Black Mirror', 'Drama'), new TvShow(createId(), 'Mindhunter', 'Thriller')];
  }
  getAll() {
    return this.tvShows;
  }
  getById(id) {
    return this.tvShows.find(show => show.id == id);
  }
  createTvShow(name, genre) {
    console.log(name);
    console.log(genre);
    const newShow = new TvShow(createId(), name, genre);
    this.tvShows.push(newShow);
    return newShow;
  }
}
module.exports = new TvShowService();
