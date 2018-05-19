var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var axios = require('../services/axios');

var MovieReviewsActions = {
  receiveReviews: () => {
    axios.MovieReviews
      .all()
      .then(res => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_REVIEWS,
          value: res.results
        });
      })
      .catch(message => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_REVIEWS_ERROR,
          value: message
        });
      });
  }
};

module.exports = MovieReviewsActions;
