require('./categories.scss');
var React = require('react');
var Articles = require('../Categories/Articles/articles');
var Books = require('../Categories/Books/books');

class Categories extends React.Component {
  render() {
    return (
      <div>
        <Articles />
        <Books />
      </div>
    );
  }
}

module.exports = Categories;
