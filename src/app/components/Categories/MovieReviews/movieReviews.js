require('./movieReviews.scss');
var React = require('react');
var Review = require('./review');
var axios = require('../../../services/axios');

class MovieReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getMovieReviews();
  }

  getMovieReviews() {
    axios.MovieReviews.all().then(res => {
      this.setState({reviews: res.results});
    });
  }

  render() {
    return (
      <div className="category-container">
        <h2 className="title">
          Movie Reviews
        </h2>
        <div className="category-content">
          {
            this.state.reviews.map(function (review, i) {
              return <Review key={i} review={review}/>;
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = MovieReviews;
