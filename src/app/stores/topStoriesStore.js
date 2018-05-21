var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var EventEmitter = require('events');

let _stories = [];

/**
 * Store value of articles
 *
 * @param {object} stories
 */
function setStories(stories) {
  _stories = stories;
}

/**
 * Define a child class of EventEmitter that
 * contains some helper methods
 */
class StoriesStoreClass extends EventEmitter {
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
   * Return list of stories
   */
  getStories() {
    return _stories;
  }
}

const TopStoriesStore = new StoriesStoreClass();

/**
 * Listen to the action and call correct method to handle
 */
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
