import React from 'react'
import { mount } from 'cypress-react-unit-tests'
import App from './context-example.jsx'

describe('Context example', () => {
  it('renders', () => {
    mount(<App />)
    // the label "dark" was passed through React context
    cy.contains('button', 'dark').should('be.visible')
  })
})
