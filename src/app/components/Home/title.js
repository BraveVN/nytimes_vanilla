var React = require('react');

var styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
};

class Title extends React.Component {
  render() {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>Hello New York!</h1>
        <h2 style={styles.h2}>Always a pleasure to serve latest news.</h2>
      </div>
    );
  }
}

module.exports = Title;
