import React from 'react'
import styled from 'styled-components'
import { ExchangeRate } from '../types'
import ExchangeRateRow from './ExchangeRateRow'
import ExchangeRateHeader from './ExchangeRateHeader'

type RateListProps = {
  rates?: ExchangeRate[]
}

const StyledList = styled.div`
  width: 100%;
  margin: 25px 0;
  display: table;
  border-radius: 4px;
  border: 1px solid #c9ddf3;
  div {
    padding: 4px 10px;
  }
  div.tableRow:nth-child(odd) {
    background: #f1f6fc;
  }
`

const ExchangeRateList: React.FC<RateListProps> = ({ rates }: RateListProps) => (
  <StyledList data-testid={'rate-list'}>
    <ExchangeRateHeader />
    {rates &&
      rates.map(({ rate, quantity, code, country, name }) => (
        <ExchangeRateRow
          key={`rate-${code}`}
          rate={rate}
          quantity={quantity}
          code={code}
          country={country}
          name={name}
        />
      ))}
  </StyledList>
)

export default ExchangeRateList
