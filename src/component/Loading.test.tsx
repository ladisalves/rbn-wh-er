import React from 'react'
import { render } from '@testing-library/react'
import { Loading } from './Loading'

test('renders Loading component', () => {
  const { getByTestId } = render(<Loading />)

  expect(getByTestId('loading')).toBeInTheDocument()
})
