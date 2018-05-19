var React = require('react');
require('./review.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var common = require('../../../services/common');

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
    return date.toDateString();
  }

  getMediaUrl(url) {
    return common.domain + url;
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    return (
      <div className="post">
        <a href={this.state.review.link.url}>
          <h3>
            {this.state.review.headline}
          </h3>
        </a>

        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Detail
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.review.headline}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>By {this.state.review.byline}</p>
            <i>{this.getDate(this.state.review.publication_date)}</i>
            <h4>{this.state.review.summary_short}</h4>
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
