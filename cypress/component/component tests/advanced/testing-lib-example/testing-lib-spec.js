import React from 'react'
import { mount } from 'cypress-react-unit-tests'
import Fetch from './fetch'

it('loads and displays greeting (testing-lib)', () => {
  cy.server()
  cy.route('/greeting', { greeting: 'Hello there' }).as('greet')

  const url = '/greeting'
  mount(<Fetch url={url} />)

  cy.queryByText('Load Greeting').click()
  cy.queryByRole('heading').should('have.text', 'Hello there')
  cy.queryByRole('button').should('be.disabled')
  cy.get('@greet')
    .its('url')
    .should('match', /\/greeting$/)
})
