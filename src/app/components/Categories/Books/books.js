require('./books.scss');
var React = require('react');
var Book = require('./book');
var booksActions = require('../../../actions/booksActions');
var booksStore = require('../../../stores/booksStore');

/**
 * A component that render a list of all Books
 */
class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Add an event listener with a callback
   * method before component is invoked
   */
  componentWillMount() {
    booksStore.addChangeListener(this.onChange);
  }

  /**
   * Get Books data from API when component is mounted
   */
  componentDidMount() {
    booksActions.receiveBooks();
  }

  /**
   * Remove event listener after component is unmounted
   */
  componentWillUnmount() {
    booksStore.removeChangeListener(this.onChange);
  }

  /**
   * Callback method to change articles' value
   */
  onChange() {
    this.setState({
      books: booksStore.getBooks()
    });
  }

  render() {
    return (
      <div className="category-container">
        <h2 className="title">
          Books
        </h2>
        <div className="category-content">
          {
            this.state.books.map(function (book, i) {
              return <Book key={i} book={book}/>;
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = Books;
