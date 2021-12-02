import { ExchangeRate } from '../types'
import { exchangeRateFactory } from '../factory/exchangeRateFactory'

export const parseTextResponse = (response: string): ExchangeRate[] => {
  const lines = response.split('\n')
  const rates: ExchangeRate[] = []

  lines.forEach((line, index) => {
    if ([0, 1].includes(index)) {
      return
    }
    try {
      rates.push(exchangeRateFactory(line))
    } catch (e) {
      // TODO: log parsing error
    }
  })

  return rates
}
