/// <reference types="cypress" />
/// <reference types="../../lib" />

import React from 'react'
import ReactDom from 'react-dom'
import { mount } from 'cypress-react-unit-tests'
import Button from './forward-ref.jsx'

/* eslint-env mocha */
describe('Button component', function() {
  it('works', function() {
    mount(<Button>Hello, World</Button>)
    cy.contains('Hello, World')
  })

  it('forwards refs as expected', function() {
    const ref = React.createRef()

    mount(
      <Button className="testing" ref={ref}>
        Hello, World
      </Button>,
    )
    expect(ref).to.have.property('current')
    // expect(ref.current).not.be.null;
  })
})
