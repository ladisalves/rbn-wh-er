import React from 'react'
import { render } from '@testing-library/react'
import ExchangeRateHeader from './ExchangeRateHeader'

test('renders learn react link', () => {
  const { getByTestId, getByText } = render(<ExchangeRateHeader />)

  expect(getByTestId('rate-list-header')).toBeInTheDocument()
  expect(getByText('Country')).toBeInTheDocument()
  expect(getByText('Currency')).toBeInTheDocument()
  expect(getByText('Code')).toBeInTheDocument()
  expect(getByText('Quantity')).toBeInTheDocument()
  expect(getByText('Rate')).toBeInTheDocument()
})
