var React = require('react');

var styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  }
};

class Header extends React.Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="#">Something went wrong</a>
        </p>
      </header>
    );
  }
}

module.exports = Header;
