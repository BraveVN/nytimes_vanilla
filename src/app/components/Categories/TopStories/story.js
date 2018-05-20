var React = require('react');
require('./story.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      story: props.story
    };
  }

  static get propTypes() {
    return {
      story: React.PropTypes.object.isRequired
    };
  }

  getDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  }

  getMediaUrl() {
    for (let i = 0; i < this.state.story.multimedia.length; i++) {
      const media = this.state.story.multimedia[i];
      if (media.format === 'superJumbo') {
        return <img src={media.url}/>;
      }
    }
    return <i>No media</i>;
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <div className="post" onClick={this.handleShow}>
        <h4>
          {this.state.story.title}
        </h4>
        <p className="date">Published: {this.getDate(this.state.story.published_date)}</p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.story.title} - <span className="italic-text">{this.state.story.byline}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="italic-text">
              {this.getDate(this.state.story.published_date)}
            </p>
            <p>{this.state.story.abstract}</p>
            <p className="italic-text">
              Read it on <a href={this.state.story.url} target="_blank" rel="noopener noreferrer">The New York Times</a>
            </p>
            <div className="media">{this.getMediaUrl()}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = Story;
