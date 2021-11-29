import React from 'react'
import { ExchangeRate } from '../types'
import ExchangeRateRow from './ExchangeRateRow'
import ExchangeRateHeader from './ExchangeRateHeader'

type RateListProps = {
  rates?: ExchangeRate[]
}

const ExchangeRateList: React.FC<RateListProps> = ({ rates }: RateListProps) => (
  <div data-testid={'rate-list'}>
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
  </div>
)

export default ExchangeRateList
