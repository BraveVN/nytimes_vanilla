/**
 * This axios service is used to call API
 * for specific requests and send the response to dispatcher
 */
var axios = require('axios');

/** Define constants to use in this service */
const API_ROOT = 'https://api.nytimes.com/svc/';
const API_KEY = 'b29f2677088c49d8928b56bd3641ef48';

/** Defind a constant to store response data */
const responseBody = res => res.data;

/**
 * An object that contains many HTTP method,
 * currently we only have GET method
 */
const requests = {
  /**
   * Get data from url with params and return the response
   *
   * @param {string} url
   * @param {object} params
   */
  get: (url, params) => {
    params = params ? params : {};
    params['api-key'] = API_KEY;
    return axios.get(`${API_ROOT}${url}`, {params: params}).then(responseBody);
  }
};

/** Define XHR methods of Articles */
const ArticlesSearch = {
  /**
   * Get list of articles from a fixed date range
   * (we will add an option for user to select
   * date range later)
   */
  all: () =>
    requests.get('search/v2/articlesearch.json', {
      begin_date: '20000101',
      end_date: '20180101',
      sort: 'newest'
    })
};

/** Define XHR methods for Books */
const Books = {
  /**
   * Get list of best seller books
   */
  bestSeller: () =>
    requests.get('books/v3/lists/best-sellers/history.json')
};

/** Define XHR methods for Movie Reviews */
const MovieReviews = {
  /**
   * Get list of movie reviews, currently
   * limit to 20 reviews per request
   */
  all: () =>
    requests.get('movies/v2/reviews/all.json', {offset: 20})
};

/** Define XHR methods for Top Stories */
const TopStories = {
  /**
   * Get list of top stories about Arts on
   * the New York Times.
   * We will add more features to custom the types
   * of story later.
   */
  arts: () =>
    requests.get('topstories/v2/arts.json')
};

module.exports = {
  ArticlesSearch,
  Books,
  MovieReviews,
  TopStories
};
