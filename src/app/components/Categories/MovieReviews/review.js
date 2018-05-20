var React = require('react');
require('./review.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

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
      review: React.PropTypes.object.isRequired
    };
  }

  getDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString();
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
          {this.state.review.headline}
        </h4>
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
            <img src={this.state.review.multimedia.src}/>
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
