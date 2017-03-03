import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import Sticky from './../src'

describe('Make any thing sticky', () => {
  it('Should render a dumb React sticky component', () => {
    const wrapper = mount(<Sticky>This is a React component!</Sticky>)
    expect(wrapper.text()).to.eql('This is a React component!')
  })

  it('Should have width set to 100%', () => {
    const wrapper = mount(<Sticky stickyWidth='100%'>This is a React component!</Sticky>)

    expect(wrapper.props().stickyWidth).to.eql("100%")
  })

  it('Should have scrollIndex set to 100', () => {
    const wrapper = mount(<Sticky scrollIndex='100'>This is a React component!</Sticky>)

    expect(wrapper.props().scrollIndex).to.eql("100")
  })

  it('Should have scrollIndex and width passed down', () => {
    const wrapper = mount(<Sticky stickyWidth='200%' scrollIndex='100'>This is a React component!</Sticky>)

    expect(wrapper.props().scrollIndex).to.eql("100")
    expect(wrapper.props().stickyWidth).to.eql("200%")
  })

  it('Should have isSticky to be passed down to force it sticky from a higher order component', () => {
    const wrapper = mount(<Sticky isSticky='true'>This is a React component!</Sticky>)

    expect(wrapper.props().isSticky).to.eql('true')
  })

  it('Should have isSticky to be passed down to force it sticky another way for passing it dowm', () => {
    const wrapper = mount(<Sticky isSticky={true}>This is a React component!</Sticky>)

    expect(wrapper.props().isSticky).to.eql(true)
  })

  it('Should have the passed className to the children', () => {
    const wrapper = mount(<Sticky className={{
      backgroundColor: '#ffffff',
      opacity: 100,
      top: '0',
      zIndex: '100000'
    }}>This is a React component!</Sticky>)

    expect(wrapper.props().className).to.eql({
      backgroundColor: '#ffffff',
      opacity: 100,
      top: '0',
      zIndex: '100000'
    })
  })

  it('Should be sticky at the top of the page', () => {
    const wrapper = mount(<Sticky className={{
      top: '0'
    }}>This is a React component!</Sticky>)

    expect(wrapper.props().className.top).to.eql('0')
  })

  it('Should be sticky at the bottom of the page', () => {
    const wrapper = mount(<Sticky className={{
      bottom: '0'
    }}>This is a React component!</Sticky>)

    expect(wrapper.props().className.bottom).to.eql('0')
  })
});