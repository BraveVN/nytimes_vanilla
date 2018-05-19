var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events');

let _articles = [];

function setArticles(articles) {
  _articles = articles;
}

class ArticlesStoreClass extends EventEmitter {
  emitChange() {
    this.emit(AppConstants.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }

  getArticles() {
    return _articles;
  }
}

const ArticlesStore = new ArticlesStoreClass();

ArticlesStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case AppConstants.RECIEVE_ARTICLES:
      setArticles(action.value);
      break;
    case AppConstants.RECIEVE_ARTICLES_ERROR:
      // Handle data error
      break;
    default:
  }

  ArticlesStore.emitChange();
});

module.exports = ArticlesStore;
