var React = require('react');
var Header = require('./header');
var Title = require('./title');
var Techs = require('../Categories/categories');
var Footer = require('./footer');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

class Home extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>

        <main style={styles.main}>
          <Title/>
          <Techs/>
        </main>

        <Footer/>
      </div>
    );
  }
}

module.exports = Home;
