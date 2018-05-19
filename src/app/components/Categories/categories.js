require('./categories.scss');
var React = require('react');
var Articles = require('../Categories/Articles/articles');
var Books = require('../Categories/Books/books');
var MovieReviews = require('../Categories/MovieReviews/movieReviews');
var TopStories = require('../Categories/TopStories/topStories');

class Categories extends React.Component {
  render() {
    return (
      <div>
        <Articles />
        <Books />
        <MovieReviews />
        <TopStories />
      </div>
    );
  }
}

module.exports = Categories;
