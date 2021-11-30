import { ExchangeRate } from '../types'

export const convertRate = (amount: number, code: string, rates: ExchangeRate[]) => {
  const exchangeRate = rates.find(rate => rate.code === code)

  if (!exchangeRate) {
    throw new Error('Exchange rate not found')
  }

  const rate = (amount / Math.max(1, exchangeRate.rate)) * Math.max(1, exchangeRate.quantity)

  return getRoundedAmount(rate)
}

export const getRoundedAmount = (amount: number): number => Math.round(amount * 10000) / 10000
