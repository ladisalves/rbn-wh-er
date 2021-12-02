import { exchangeRateFactory } from './exchangeRateFactory'

describe('ExchangeRate Factory', () => {
  it('should create ExchangeRate', () => {
    const exchangeRate = exchangeRateFactory('Island|koruna|100|ISK|17,364')
    expect(exchangeRate.rate).toBe(17.364)
    expect(exchangeRate.country).toBe('Island')
    expect(exchangeRate.name).toBe('koruna')
    expect(exchangeRate.name).toBe('koruna')
  })

  it('should not create ExchangeRate', () => {
    expect(() => exchangeRateFactory('test')).toThrow(
      new Error('ExchangeRate parsing error, unsupported number of columns.'),
    )
  })
})
