require('./movieReviews.scss');
var React = require('react');
var Review = require('./review');
var movieReviewsActions = require('../../../actions/movieReviewsActions');
var movieReviewsStore = require('../../../stores/movieReviewsStore');

/**
 * A component that render a list of all MovieReviews
 */
class MovieReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Add an event listener with a callback
   * method before component is invoked
   */
  componentWillMount() {
    movieReviewsStore.addChangeListener(this.onChange);
  }

  /**
   * Get Movie Reviews data from API when component is mounted
   */
  componentDidMount() {
    movieReviewsActions.receiveReviews();
  }

  /**
   * Remove event listener after component is unmounted
   */
  componentWillUnmount() {
    movieReviewsStore.removeChangeListener(this.onChange);
  }

  /**
   * Callback method to change reviews' value
   */
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
