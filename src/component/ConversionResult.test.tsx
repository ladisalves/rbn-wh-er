import React from 'react'
import { render } from '@testing-library/react'
import ConversionResult from './ConversionResult'
import { mockedRates } from './ExchangeRateList.test'

test('renders ConversionResult', () => {
  const { getByTestId } = render(<ConversionResult amount={100.11} currencyCode={'EUR'} rates={mockedRates} />)

  const container = getByTestId('conversion-result')
  expect(container).toBeInTheDocument()
  expect(container).toHaveTextContent('CZK 100.11')
})
