var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var axios = require('../services/axios');

var ArticlesActions = {
  receiveArticles: () => {
    axios.ArticlesSearch
      .all()
      .then(res => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_ARTICLES,
          value: res.response.docs
        });
      })
      .catch(message => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_ARTICLES_ERROR,
          value: message
        });
      });
  }
};

module.exports = ArticlesActions;
