require('./books.scss');
var React = require('react');
var Book = require('./book');
var axiosServices = require('../../../axiosServices');

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
    axiosServices.Books.bestSeller().then(res => {
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
