require('./books.scss');
var React = require('react');
var Book = require('./book');
var booksActions = require('../../../actions/booksActions');
var booksStore = require('../../../stores/booksStore');

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    booksStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    booksActions.receiveBooks();
  }

  componentWillUnmount() {
    booksStore.removeChangeListener(this.onChange);
  }

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
