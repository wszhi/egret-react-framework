import { shallow } from 'enzyme'
import React from 'react'
import App from './App'

describe('App component test', () => {
  let wrapper: any

  it('snapshot test', () => {
    wrapper = shallow(<App />)
    expect(wrapper.render()).toMatchSnapshot()
  })
})
