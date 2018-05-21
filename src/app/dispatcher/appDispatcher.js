/**
 * Create the dispatcher instance to dispatch
 * app's actions
 */
var Dispatcher = require('flux').Dispatcher;

const AppDispatcher = new Dispatcher();

module.exports = AppDispatcher;
