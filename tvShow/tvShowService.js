const TvShow = require('./TvShow');

class TvShowService {
  constructor() {
    this.tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama'), new TvShow(3, 'Mindhunter', 'Thriller')];
  }
  getAll() {
    return this.tvShows;
  }
  getById(id) {
    return this.tvShows.find(show => show.id == id);
  }
}
module.exports = new TvShowService();
