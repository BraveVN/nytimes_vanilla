var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var axios = require('../services/axios');

var TopStoriesActions = {
  receiveStories: () => {
    axios.TopStories
      .arts()
      .then(res => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_STORIES,
          value: res.results
        });
      })
      .catch(message => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_STORIES_ERROR,
          value: message
        });
      });
  }
};

module.exports = TopStoriesActions;
