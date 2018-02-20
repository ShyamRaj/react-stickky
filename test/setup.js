var jsdom = require('jsdom');

// setup the simplest document possible
const { JSDOM } = jsdom;

const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

// get the window object out of the document
const win = document.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = document;

global.window = win;
global.navigator = {
  userAgent: 'node.js'
};