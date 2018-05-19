var axios = require('axios');

const API_ROOT = 'https://api.nytimes.com/svc/';
const API_KEY = 'b29f2677088c49d8928b56bd3641ef48';

const responseBody = res => res.data;

const requests = {
  get: (url, params) => {
    params = params ? params : {}
    params['api-key'] = API_KEY;
    return axios.get(`${API_ROOT}${url}`, {params: params}).then(responseBody)
  }
};

const ArticlesSearch = {
  all: () =>
    requests.get('search/v2/articlesearch.json', {
      begin_date: '20000101',
      end_date: '20180101',
      sort: 'newest'
    })
};

const Books = {
  bestSeller: () =>
    requests.get('books/v3/lists/best-sellers/history.json')
}

const MovieReviews = {
  all: () =>
    requests.get('movies/v2/reviews/all.json', {'offset': 20})
}

const TopStories = {
  arts: () =>
    requests.get('topstories/v2/arts.json')
}

module.exports = {
  ArticlesSearch,
  Books,
  MovieReviews,
  TopStories
};
