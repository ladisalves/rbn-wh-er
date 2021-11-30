import React from 'react'
import styled from 'styled-components'
import ExchangeRateList from './component/ExchangeRateList'
import { ExchangeRate } from './types'
import ConversionForm from './component/ConversionForm'

const rates: ExchangeRate[] = [
  { rate: 11.1, country: 'Australia', name: 'dollar', code: 'AUD', quantity: 1 },
  { rate: 21.1, country: 'EMU', name: 'euro', code: 'EUR', quantity: 1 },
]

const AppWrapper = styled.div`
  width: 800px;
  margin: 45px auto;
`

function App() {
  return (
    <AppWrapper>
      <h1>Czech National Bank Exchange Rates</h1>
      <ConversionForm rates={rates} />
      <ExchangeRateList rates={rates} />
    </AppWrapper>
  )
}

export default App
