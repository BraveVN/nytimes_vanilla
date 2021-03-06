/* eslint "react/no-find-dom-node": "off" */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Footer = require('./footer');

/**
 * Test of Footer component
 */
describe('Footer', function () {
  /**
   * Expect the component to return enough
   * element of footer
   */
  test('should be a footer', function () {
    var footer = TestUtils.renderIntoDocument(<Footer/>);
    var footerNode = ReactDOM.findDOMNode(footer);
    expect(footerNode.tagName).toEqual('FOOTER');
    expect(footerNode.innerHTML).toEqual('Hello World!');
  });
});
