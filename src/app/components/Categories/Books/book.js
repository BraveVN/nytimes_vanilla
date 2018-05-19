var React = require('react');
require('./book.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var common = require('../../../services/common');

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      book: props.book,
    };
  }

  static get propTypes() {
    return {
      book: React.PropTypes.object.isRequired
    };
  }

  getPublicDate(dateString) {
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
        <a href={this.state.book.web_url} target="_blank" rel="noopener noreferrer">
          <h3>
            {this.state.book.title}
          </h3>
        </a>
        <p>{this.state.book.description}</p>

        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
          Detail
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.state.book.description}</h4>
            <p>${this.state.book.price}</p>
            <p>{this.state.book.contributor}</p>
            <p>{this.state.book.publisher}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = Book;
