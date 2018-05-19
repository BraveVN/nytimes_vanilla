var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _articles = [];

function setArticles(articles) {
  _articles = articles;
}

class ArticlesStoreClass extends EventEmitter {
  emitChange() {
    this.emit(appConstants.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(appConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(appConstants.CHANGE_EVENT, callback);
  }

  getArticles() {
    return _articles;
  }
}

const ArticlesStore = new ArticlesStoreClass();

ArticlesStore.dispatchToken = appDispatcher.register(action => {
  switch (action.actionType) {
    case appConstants.RECIEVE_ARTICLES:
      setArticles(action.value);
      break;
    case appConstants.RECIEVE_ARTICLES_ERROR:
      // Handle data error
      break;
    default:
  }

  ArticlesStore.emitChange();
});

module.exports = ArticlesStore;
