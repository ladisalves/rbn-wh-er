import { convertRate } from './convertRate'
import { ExchangeRate } from '../types'

const rates: ExchangeRate[] = [
  { rate: 16.057, country: 'Australia', name: 'dollar', code: 'AUD', quantity: 1 },
  { rate: 18.801, country: 'Japan', name: 'yen', code: 'JPY', quantity: 100 },
]

describe('Amount converstion', () => {
  it('should convert amount to selected currency', () => {
    expect(convertRate(1000, 'AUD', rates)).toBe(62.2781)
    expect(convertRate(1000, 'JPY', rates)).toBe(5318.866)
  })

  it('should throw an exception for unknown currency', () => {
    expect(() => convertRate(1000, 'XYZ', rates)).toThrow(new Error('Exchange rate not found'))
  })
})
