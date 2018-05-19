require('./categories.scss');
var React = require('react');
var Articles = require('../Categories/Articles/articles');

class Categories extends React.Component {
  render() {
    return (
      <Articles />
    );
  }
}

module.exports = Categories;
