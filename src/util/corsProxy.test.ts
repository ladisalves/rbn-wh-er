import { getCorsProxyUrl } from './corsProxy'

describe('Proxy URL', () => {
  it('should get end-point URL wrapper into proxy URL', () => {
    expect(getCorsProxyUrl('https://domain.com')).toBe('https://api.allorigins.win/raw?url=https://domain.com')
  })
})
