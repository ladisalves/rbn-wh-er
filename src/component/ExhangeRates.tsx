import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { ExchangeRate } from '../types'
import ConversionForm from './ConversionForm'
import ExchangeRateList from './ExchangeRateList'
import { parseTextResponse } from '../util/parseTextResponse'

const ExchangeRates: React.FC = () => {
  const { isLoading, error, data } = useQuery('cnb', async () => {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt',
    )

    return response.text()
  })

  const rates = useMemo<ExchangeRate[]>(() => (data ? parseTextResponse(data) : []), [data])

  console.log(rates)

  return (
    <div>
      {rates && <ConversionForm rates={rates} />}
      {rates && <ExchangeRateList rates={rates} />}
      {isLoading && <div>loading</div>}
      {error && <div>error</div>}
    </div>
  )
}

export default ExchangeRates
