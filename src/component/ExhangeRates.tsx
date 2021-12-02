import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { ExchangeRate } from '../types'
import ConversionForm from './ConversionForm'
import ExchangeRateList from './ExchangeRateList'
import { parseTextResponse } from '../util/parseTextResponse'
import { Loading } from './Loading'
import { ErrorMessage } from './ErrorMessage'
import { getCorsProxyUrl } from '../util/corsProxy'

const ExchangeRates: React.FC = () => {
  const { isLoading, error, data } = useQuery('cnb', async () => {
    // TODO: build configuration for URL end-point
    const response = await fetch(
      getCorsProxyUrl(
        'https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt',
      ),
    )

    return response.text()
  })

  const rates = useMemo<ExchangeRate[] | undefined>(() => (data ? parseTextResponse(data) : undefined), [data])

  return (
    <div>
      {rates && !error && (
        <>
          <ConversionForm rates={rates} />
          <ExchangeRateList rates={rates} />
        </>
      )}
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
    </div>
  )
}

export default ExchangeRates
