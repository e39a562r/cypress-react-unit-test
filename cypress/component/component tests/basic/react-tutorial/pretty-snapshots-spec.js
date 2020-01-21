/// <reference types="cypress" />
import Hello from './hello.jsx'
import React from 'react'
import { mount } from 'cypress-react-unit-tests'
import pretty from 'pretty'

it('says hello world', () => {
  mount(<Hello name="world" />)
  cy.contains('Hello, world!').should('be.visible')
  cy.get('#cypress-jsdom')
    .invoke('html')
    .then(pretty)
    .should('equal', '<h1>Hello, world!</h1>')

  // too bad - cypress-plugin-snapshots throws
  // ReferenceError: regeneratorRuntime is not defined
  // .toMatchSnapshot()
})
