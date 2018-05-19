var axios = require('axios');

const API_ROOT = 'https://api.nytimes.com/svc/search/v2';
const API_KEY = 'b29f2677088c49d8928b56bd3641ef48';

const responseBody = res => res.data;

const requests = {
  get: (url, params) =>
    axios
      .get(`${API_ROOT}${url}`, {params: params})
      .then(responseBody)
};

const ArticlesSearch = {
  all: () =>
    requests.get('/articlesearch.json', {
      'api-key': API_KEY,
      begin_date: '20000101',
      end_date: '20180101',
      sort: 'newest'
    })
};

module.exports = {
  ArticlesSearch
};
