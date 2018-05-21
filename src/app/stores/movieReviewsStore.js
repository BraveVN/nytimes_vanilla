var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _reviews = [];

/**
 * Store value of articles
 *
 * @param {object} reviews
 */
function setReviews(reviews) {
  _reviews = reviews;
}

/**
 * Define a child class of EventEmitter that
 * contains some helper methods
 */
class MovieReviewsClass extends EventEmitter {
  /**
   * Notify listener about the changes
   */
  emitChange() {
    this.emit(appConstants.CHANGE_EVENT);
  }

  /**
   * Execute callback when event is emitted
   *
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(appConstants.CHANGE_EVENT, callback);
  }

  /**
   * Remove the listener & callback from Event Listener
   *
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(appConstants.CHANGE_EVENT, callback);
  }

  /**
   * Return list of reviews
   */
  getReviews() {
    return _reviews;
  }
}

const MovieReviewsStore = new MovieReviewsClass();

/**
 * Listen to the action and call correct method to handle
 */
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
