import React from 'react'
import { render } from '@testing-library/react'
import { mockedRates } from './ExchangeRateList.test'
import ConversionForm from './ConversionForm'

test('renders ConversionForm', () => {
  const { getByTestId, getByText } = render(<ConversionForm rates={mockedRates} />)

  expect(getByTestId('convert-form')).toBeInTheDocument()
  expect(getByTestId('form-amount')).toBeInTheDocument()
  expect(getByTestId('form-code')).toBeInTheDocument()
  expect(getByTestId('form-submit')).toBeInTheDocument()
})
