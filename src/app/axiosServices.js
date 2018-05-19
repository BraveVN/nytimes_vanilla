var axios = require('axios');

const API_ROOT = 'https://api.nytimes.com/svc/search/v2';
const API_KEY = 'b29f2677088c49d8928b56bd3641ef48';

const responseBody = res => res.data;

const requests = {
  get: url =>
    axios
      .get(`${API_ROOT}${url}`, {
        params: {
          'api-key': API_KEY
        }
      })
      .then(responseBody)
};

const ArticlesSearch = {
  all: () =>
    requests.get('/articlesearch.json')
};

module.exports = {
  ArticlesSearch
};
