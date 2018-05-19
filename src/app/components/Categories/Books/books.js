require('./books.scss');
var React = require('react');
var Book = require('./book');
var axios = require('../../../services/axios');

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.bestSeller();
  }

  bestSeller() {
    axios.Books.bestSeller().then(res => {
      this.setState({books: res.results});
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
