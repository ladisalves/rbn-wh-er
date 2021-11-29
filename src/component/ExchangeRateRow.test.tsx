import React from 'react'
import { render } from '@testing-library/react'
import ExchangeRateRow from './ExchangeRateRow'

test('renders learn react link', () => {
  const { getByTestId, getByText } = render(
    <ExchangeRateRow rate={16.264} country={'Australia'} code={'AUD'} name={'dollar'} quantity={99} />,
  )

  expect(getByTestId('rate-AUD')).toBeInTheDocument()
  expect(getByText('Australia')).toBeInTheDocument()
  expect(getByText('AUD')).toBeInTheDocument()
  expect(getByText('dollar')).toBeInTheDocument()
  expect(getByText('16.264')).toBeInTheDocument()
  expect(getByText('99')).toBeInTheDocument()
})
