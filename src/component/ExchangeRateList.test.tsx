import React from 'react'
import { render } from '@testing-library/react'
import ExchangeRateList from './ExchangeRateList'
import { ExchangeRate } from '../types'

const rates: ExchangeRate[] = [
  { rate: 11.1, country: 'Australia', name: 'dollar', code: 'AUD', quantity: 1 },
  { rate: 21.1, country: 'EMU', name: 'euro', code: 'EUR', quantity: 1 },
]

test('renders ExchangeRateList', () => {
  const { getByTestId } = render(<ExchangeRateList rates={rates} />)

  expect(getByTestId('rate-list')).toBeInTheDocument()
  expect(getByTestId('rate-list-header')).toBeInTheDocument()
  expect(getByTestId('rate-AUD')).toBeInTheDocument()
  expect(getByTestId('rate-EUR')).toBeInTheDocument()
})
