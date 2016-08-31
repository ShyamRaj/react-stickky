var jsdom = require('jsdom');

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

var win = doc.defaultView;

global.document = doc;
global.window = win;
global.navigator = {
  userAgent: 'node.js'
};