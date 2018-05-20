require('./home.scss');
var React = require('react');
var Title = require('./title');
var Content = require('../Content/content');
var Footer = require('./footer');

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <main className="home">
          <Title/>
          <Content/>
        </main>

        <Footer/>
      </div>
    );
  }
}

module.exports = Home;
