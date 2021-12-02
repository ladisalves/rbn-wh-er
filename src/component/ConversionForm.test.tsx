import React from 'react'
import { render } from '@testing-library/react'
import ConversionResult from './ConversionResult'
import { mockedRates } from './ExchangeRateList.test'

test('renders ConversionResult', () => {
  const { getByTestId, getByText } = render(
    <ConversionResult amount={100.11} currencyCode={'EUR'} rates={mockedRates} />,
  )

  expect(getByTestId('conversion-result')).toBeInTheDocument()
  expect(getByText('CZK 100.11')).toBeInTheDocument()
})
