import React from 'react'
import assert from 'assert'
import TestUtils from 'react-addons-test-utils'
import Sticky from './../src'

describe('Make any thing sticky', () => {
  it('Should render a dumb React component', () => {
    const wrapper = TestUtils.renderIntoDocument(
      <Sticky>This is a React component!</Sticky>
    );

    const renderedText = TestUtils.findRenderedDOMComponentWithTag(wrapper, 'div');

    assert.equal(renderedText.textContent, 'This is a React component!');
  })
});