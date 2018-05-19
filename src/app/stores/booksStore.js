var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _books = [];

function setBooks(books) {
  _books = books;
}

class BooksStoreClass extends EventEmitter {
  emitChange() {
    this.emit(appConstants.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(appConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(appConstants.CHANGE_EVENT, callback);
  }

  getBooks() {
    return _books;
  }
}

const BooksStore = new BooksStoreClass();

BooksStore.dispatchToken = appDispatcher.register(action => {
  switch (action.actionType) {
    case appConstants.RECIEVE_BOOKS:
      setBooks(action.value);
      break;
    case appConstants.RECIEVE_BOOKS_ERROR:
      // Handle data error
      break;
    default:
  }

  BooksStore.emitChange();
});

module.exports = BooksStore;
