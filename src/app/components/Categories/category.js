var React = require('react');

var styles = {
  tech: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  link: {
    color: '#000'
  }
};

module.exports = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.category
    };
  }

  static get propTypes() {
    return {
      category: React.PropTypes.object.isRequired
    };
  }

  render() {
    return (
      <div style={styles.tech}>
        <a style={styles.link} href={this.state.category.web_url} target="_blank" rel="noopener noreferrer">
          <h3>
            {this.state.category.headline.main}
          </h3>
        </a>
        {/* <p>{this.props.tech.text1}</p> */}
        {/* <p>{this.props.tech.text2}</p> */}
      </div>
    );
  }
};
