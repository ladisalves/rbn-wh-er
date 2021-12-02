import { parseTextResponse } from './parseTextResponse'

const mockResponse = `02.12.2021 #232
země|měna|množství|kód|kurz
Austrálie|dolar|1|AUD|15,909
Brazílie|real|1|BRL|3,975
`

test('should iterate text response by lines and skip first two lines', () => {
  const rates = parseTextResponse(mockResponse)
  expect(rates.length).toBe(2)
  expect(rates[0].code).toBe('AUD')
  expect(rates[1].code).toBe('BRL')
})
