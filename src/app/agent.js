var superagentPromise = require('superagent-promise');
var _superagent = require('superagent');

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://api.nytimes.com/svc/search/v2';
const API_KEY = 'b29f2677088c49d8928b56bd3641ef48';

const responseBody = res => res.response;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).query({'api-key': API_KEY}).then(responseBody)
};

const ArticlesSearch = {
  all: () =>
    requests.get('/articlesearch.json')
};

module.exports = {
  ArticlesSearch
};
