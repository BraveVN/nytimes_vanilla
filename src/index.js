require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var Home = require('./app/components/Home/home');

require('./index.scss');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
  </Router>,
  document.getElementById('root')
);
