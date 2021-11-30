import { convertRate, getRoundedAmount } from './convertRate'
import { ExchangeRate } from '../types'

const rates: ExchangeRate[] = [
  { rate: 16.057, country: 'Australia', name: 'dollar', code: 'AUD', quantity: 1 },
  { rate: 18.801, country: 'Japan', name: 'yen', code: 'JPY', quantity: 100 },
]

describe('Amount conversion', () => {
  it('should convert amount to selected currency', () => {
    expect(convertRate(1000, 'AUD', rates)).toBe(62.2781)
    expect(convertRate(1000, 'JPY', rates)).toBe(5318.866)
  })

  it('should throw an exception for unknown currency', () => {
    expect(() => convertRate(1000, 'XYZ', rates)).toThrow(new Error('Exchange rate not found'))
  })

  it('should round amount up to 4 decimals', () => {
    expect(getRoundedAmount(1000)).toBe(1000.0)
    expect(getRoundedAmount(1000.12)).toBe(1000.12)
    expect(getRoundedAmount(1000.12345678)).toBe(1000.1235)
  })
})
