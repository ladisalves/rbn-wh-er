import React from 'react'
import { useQuery } from 'react-query'
import { ExchangeRate } from '../types'
import ConversionForm from './ConversionForm'
import ExchangeRateList from './ExchangeRateList'

const rates: ExchangeRate[] = [
  { rate: 11.1, country: 'Australia', name: 'dollar', code: 'AUD', quantity: 1 },
  { rate: 21.1, country: 'EMU', name: 'euro', code: 'EUR', quantity: 1 },
]

const ExchangeRates: React.FC = () => {
  const { isLoading, error, data } = useQuery('cnb', () =>
    fetch(
      'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt',
    ).then(res => {
      // TBD
    }),
  )

  return (
    <div>
      {!isLoading && <ConversionForm rates={rates} />}
      {!isLoading && <ExchangeRateList rates={rates} />}
      {isLoading && <div>loading</div>}
      {error && <div>error</div>}
    </div>
  )
}

export default ExchangeRates
