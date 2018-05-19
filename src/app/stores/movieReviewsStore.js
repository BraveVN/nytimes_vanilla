var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _reviews = [];

function setReviews(reviews) {
  _reviews = reviews;
}

class MovieReviewsClass extends EventEmitter {
  emitChange() {
    this.emit(appConstants.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(appConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(appConstants.CHANGE_EVENT, callback);
  }

  getReviews() {
    return _reviews;
  }
}

const MovieReviewsStore = new MovieReviewsClass();

MovieReviewsStore.dispatchToken = appDispatcher.register(action => {
  switch (action.actionType) {
    case appConstants.RECEIVE_REVIEWS:
      setReviews(action.value);
      break;
    case appConstants.RECEIVE_REVIEWS_ERROR:
      // Handle data error
      break;
    default:
  }

  MovieReviewsStore.emitChange();
});

module.exports = MovieReviewsStore;
