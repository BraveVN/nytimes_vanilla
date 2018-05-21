var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _books = [];

/**
 * Store value of articles
 *
 * @param {object} books
 */
function setBooks(books) {
  _books = books;
}

/**
 * Define a child class of EventEmitter that
 * contains some helper methods
 */
class BooksStoreClass extends EventEmitter {
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
   * Return list of books
   */
  getBooks() {
    return _books;
  }
}

const BooksStore = new BooksStoreClass();

/**
 * Listen to the action and call correct method to handle
 */
BooksStore.dispatchToken = appDispatcher.register(action => {
  switch (action.actionType) {
    case appConstants.RECEIVE_BOOKS:
      setBooks(action.value);
      break;
    case appConstants.RECEIVE_BOOKS_ERROR:
      // Handle data error
      break;
    default:
  }

  BooksStore.emitChange();
});

module.exports = BooksStore;
