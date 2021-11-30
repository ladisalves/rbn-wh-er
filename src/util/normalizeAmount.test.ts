import { normalizeAmount } from './normalizeAmount'

test('should normalize amount regardless decimals delimiter', () => {
  expect(normalizeAmount('10.33')).toBe(10.33)
  expect(normalizeAmount('118,456')).toBe(118.456)
  expect(normalizeAmount('118x456')).toBe(118)
})
