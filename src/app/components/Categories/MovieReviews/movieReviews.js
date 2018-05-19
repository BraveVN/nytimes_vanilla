require('./movieReviews.scss');
var React = require('react');
var Review = require('./review');
var movieReviewsActions = require('../../../actions/movieReviewsActions');
var movieReviewsStore = require('../../../stores/movieReviewsStore');

class MovieReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    movieReviewsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    movieReviewsActions.receiveReviews();
  }

  componentWillUnmount() {
    movieReviewsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      reviews: movieReviewsStore.getReviews()
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
