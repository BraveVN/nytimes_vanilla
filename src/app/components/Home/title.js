require('./title.scss');
var React = require('react');

/**
 * Illustrate the title section on home page
 * (or Hero section in other words)
 */
class Title extends React.Component {
  render() {
    return (
      <div className="home-titles">
        <h1 className="primary-title">Brothers & Sisters!</h1>
        <h2 className="slogan">Always a pleasure to serve.</h2>
      </div>
    );
  }
}

module.exports = Title;
