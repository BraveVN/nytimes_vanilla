var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Sidebar = require('../Sidebar/sidebar');
var Categories = require('../Categories/categories');

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFluid: true
    };
  }

  render() {
    return (
      <Grid fluid={this.state.isFluid}>
        <Row>
          <Col xs={12} md={2}>
            <h2>Categories</h2>
            <Sidebar/>
          </Col>
          <Col xs={12} md={10}>
            <Categories/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = Content;
