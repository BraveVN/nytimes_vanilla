require('./home.scss');
var React = require('react');
var Title = require('./title');
var Footer = require('./footer');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Articles = require('../Categories/Articles/articles');
var Books = require('../Categories/Books/books');
var MovieReviews = require('../Categories/MovieReviews/movieReviews');
var TopStories = require('../Categories/TopStories/topStories');

/**
 * Render the Home page with child component
 */
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFluid: true
    };
  }

  render() {
    return (
      <div className="container">
        <main className="home">
          <Title/>
          <Grid fluid={this.state.isFluid}>
            <Row>
              <Col xs={12} md={8}>
                <Articles/>
                <MovieReviews/>
                <Books/>
              </Col>
              <Col xs={12} md={4}>
                <TopStories/>
              </Col>
            </Row>
          </Grid>
        </main>

        <Footer/>
      </div>
    );
  }
}

module.exports = Home;
