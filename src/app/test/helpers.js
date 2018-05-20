var React = require('react');
var faker = require('faker');
var enzyme = require('enzyme');
var renderer = require('react-test-renderer');
var mount = enzyme.mount;
var render = enzyme.render;
var shallow = enzyme.shallow;
var configure = enzyme.configure;
var Adapter = require('enzyme-adapter-react-15');
var common = require('../services/common');

configure({
  adapter: new Adapter()
});

global.React = React;
global.expect = expect;
global.faker = faker;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.common = common;
global.renderer = renderer;
