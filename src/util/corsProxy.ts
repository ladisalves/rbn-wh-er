const PROXY_URL = 'https://api.allorigins.win/raw?url='

export const getCorsProxyUrl = (url: string): string => `${PROXY_URL}${encodeURI(url)}`
