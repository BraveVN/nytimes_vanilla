var React = require('react');
// var axios = require('axios');
// var Tech = require('./category');
var agent = require('../../agent');

var styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

module.exports = React.createClass({
  getInitialState: function () {
    return {techs: agent.ArticlesSearch.all()};
  },

  // componentDidMount: function () {
  //   axios
  //     .get('app/components/Categories/categories.json')
  //     .then(function (response) {
  //       this.setState({techs: response.data});
  //     }.bind(this));
  // },

  render: function () {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Cooked with all these awesome technologies:
        </h2>
        <div style={styles.techs}>
          {
            JSON.stringify(this.state.techs)
            // this.state.techs.map(function (tech, i) {
            //   return <Tech key={i} tech={tech}/>;
            // })
          }
        </div>
      </div>
    );
  }
});
