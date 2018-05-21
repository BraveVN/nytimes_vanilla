var React = require('react');
require('./story.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

/**
 * Render a Story component that contain
 * all information about a story
 */
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
      /** This component require data in a story object from parent component */
      story: React.PropTypes.object.isRequired
    };
  }

  /**
   * Return a readable date from input
   *
   * @param {string} dateString
   *
   * Ex: 2018-05-21T13:28:41.003Z => 5/21/2018
   */
  getDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
  }

  /**
   * Return a JSX element that contain correct url to
   * media file if the type of media matchs the condition
   * or return a short desription to show that there's no
   * media.
   */
  getMediaUrl() {
    for (let i = 0; i < this.state.story.multimedia.length; i++) {
      const media = this.state.story.multimedia[i];
      if (media.format === 'superJumbo') {
        return <img src={media.url}/>;
      }
    }
    return <i>No media</i>;
  }

  /**
   * Handle Close action on modal.
   * Set `show` to false so it'll hide the modal
   */
  handleClose() {
    this.setState({show: false});
  }

  /**
   * Return a JSX element that contain book's
   * description when it's available
   */
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
