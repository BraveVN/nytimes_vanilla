var React = require('react');
require('./book.scss');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

/**
 * Render a Book component that contain
 * all information about a book
 */
class Book extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      book: props.book
    };
  }

  static get propTypes() {
    return {
      /** This component require data in a book object from parent component */
      book: React.PropTypes.object.isRequired
    };
  }

  /**
   * Return a readable date from input
   *
   * @param {string} dateString
   *
   * Ex: 2018-05-21T13:28:41.003Z => 5/21/2018
   */
  getPublicDate(dateString) {
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

  /**
   * Return a JSX element that contain book's
   * description when it's available
   */
  handleShowDescription() {
    if (this.state.book.description) {
      return <h4>{this.state.book.description}</h4>;
    }
    return <h4><i>No description</i></h4>;
  }

  render() {
    return (
      <div className="post" onClick={this.handleShow}>
        <h4>
          {this.state.book.title}
        </h4>
        <p className="italic-text">{this.state.book.description}</p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.book.title} - <span className="italic-text">{this.state.book.contributor}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.handleShowDescription()}
            <p className="book-price">${this.state.book.price}</p>
            <p className="italic-text">Published by: {this.state.book.publisher}</p>
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
