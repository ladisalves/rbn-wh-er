import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders home page', () => {
  render(<App />)
  const linkElement = screen.getByText('Czech National Bank Exchange Rates')
  expect(linkElement).toBeInTheDocument()
})
