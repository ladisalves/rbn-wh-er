import React from 'react'
import styled from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import ExchangeRates from './component/ExhangeRates'

const AppWrapper = styled.div`
  width: 800px;
  margin: 45px auto;
`

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <h1>Czech National Bank Exchange Rates</h1>
        <ExchangeRates />
      </AppWrapper>
    </QueryClientProvider>
  )
}

export default App
