var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var axios = require('../services/axios');

var ArticlesActions = {
  receiveArticles: () => {
    axios.ArticlesSearch
      .all()
      .then(res => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_ARTICLES,
          value: res.response.docs
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_ARTICLES_ERROR,
          value: message
        });
      });
  }
};

module.exports = ArticlesActions;
