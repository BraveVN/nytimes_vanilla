var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _articles = [];

/**
 * Store value of articles
 *
 * @param {object} articles
 */
function setArticles(articles) {
  _articles = articles;
}

/**
 * Define a child class of EventEmitter that
 * contains some helper methods
 */
class ArticlesStoreClass extends EventEmitter {
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
   * Return list of articles
   */
  getArticles() {
    return _articles;
  }
}

const ArticlesStore = new ArticlesStoreClass();

/**
 * Listen to the action and call correct method to handle
 */
ArticlesStore.dispatchToken = appDispatcher.register(action => {
  switch (action.actionType) {
    case appConstants.RECEIVE_ARTICLES:
      setArticles(action.value);
      break;
    case appConstants.RECEIVE_ARTICLES_ERROR:
      // Handle data error
      break;
    default:
  }

  ArticlesStore.emitChange();
});

module.exports = ArticlesStore;
