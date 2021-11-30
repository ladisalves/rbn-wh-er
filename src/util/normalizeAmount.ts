export const normalizeAmount = (amount: string): number => Number.parseFloat(amount.replace(',', '.'))
