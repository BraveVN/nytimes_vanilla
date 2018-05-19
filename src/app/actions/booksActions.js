var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');
var axios = require('../services/axios');

var BooksActions = {
  receiveBooks: () => {
    axios.Books
      .bestSeller()
      .then(res => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_BOOKS,
          value: res.results
        });
      })
      .catch(message => {
        appDispatcher.dispatch({
          actionType: appConstants.RECEIVE_BOOKS_ERROR,
          value: message
        });
      });
  }
};

module.exports = BooksActions;
