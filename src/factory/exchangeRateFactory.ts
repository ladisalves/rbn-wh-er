import { ExchangeRate } from '../types'
import { normalizeAmount } from '../util/normalizeAmount'

export const exchangeRateFactory = (parsedLined: string): ExchangeRate => {
  const columns = parsedLined.split('|')

  if (columns.length === 5) {
    return {
      rate: normalizeAmount(columns[4]),
      quantity: parseInt(columns[2]),
      code: columns[3],
      name: columns[1],
      country: columns[0],
    }
  }

  // TODO: log structure error
  throw new Error('ExchangeRate parsing error, unsupported number of columns.')
}
