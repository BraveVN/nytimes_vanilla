var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _stories = [];

function setStories(stories) {
  _stories = stories;
}

class StoriesStoreClass extends EventEmitter {
  emitChange() {
    this.emit(appConstants.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(appConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(appConstants.CHANGE_EVENT, callback);
  }

  getStories() {
    return _stories;
  }
}

const TopStoriesStore = new StoriesStoreClass();

TopStoriesStore.dispatchToken = appDispatcher.register(action => {
  switch (action.actionType) {
    case appConstants.RECEIVE_STORIES:
      setStories(action.value);
      break;
    case appConstants.RECEIVE_STORIES_ERROR:
      // Handle data error
      break;
    default:
  }

  TopStoriesStore.emitChange();
});

module.exports = TopStoriesStore;
