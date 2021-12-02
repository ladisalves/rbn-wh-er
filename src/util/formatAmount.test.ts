import { formatAmount } from './formatAmount'

describe('Amount formatter', () => {
  it('should format amount', () => {
    expect(formatAmount(100, 'JPY')).toBe('¥100')
  })
})
