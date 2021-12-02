import React from 'react'
import { render } from '@testing-library/react'
import { ErrorMessage } from './ErrorMessage'

test('renders Error component', () => {
  const { getByTestId } = render(<ErrorMessage />)

  expect(getByTestId('error-message')).toBeInTheDocument()
})
