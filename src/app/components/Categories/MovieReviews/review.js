var React = require('react');
require('./review.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

/**
 * Render a single element of Review in Movie Reviews list
 */
class Review extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      review: props.review
    };
  }

  static get propTypes() {
    return {
      /** Value of review prop will be used to render data in view */
      review: React.PropTypes.object.isRequired
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
   * Handle Close action on modal.
   * Set `show` to false so it'll hide the modal
   */
  handleClose() {
    this.setState({show: false});
  }

  /**
   * Handle Show action on modal
   * Set `show` to true so it'll display the modal
   */
  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <div className="post" onClick={this.handleShow}>
        <h4>
          {this.state.review.headline}
        </h4>
        <div className="media"><img src={this.state.review.multimedia.src}/></div>
        <p className="date">Published: {this.getDate(this.state.review.publication_date)}</p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.review.headline} - <span className="italic-text">by {this.state.review.byline}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="italic-text">
              {this.getDate(this.state.review.publication_date)}
            </p>
            <h4>{this.state.review.summary_short}</h4>
            <p className="italic-text">
              Read it on <a href={this.state.review.link.url} target="_blank" rel="noopener noreferrer">The New York Times</a>
            </p>
            <div className="media"><img src={this.state.review.multimedia.src}/></div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = Review;
