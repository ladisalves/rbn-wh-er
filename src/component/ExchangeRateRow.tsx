import React from 'react'
import styled from 'styled-components'

type RateProps = {
  rate: number
  quantity: number
  code: string
  country: string
  name: string
}

const Row = styled.div`
  display: table-row;
`

const Cell = styled.div`
  display: table-cell;
`

const ExchangeRateRow: React.FC<RateProps> = ({ rate, quantity, code, country, name }: RateProps) => (
  <Row className='tableRow' data-testid={`rate-${code}`}>
    <Cell>{country}</Cell>
    <Cell>{name}</Cell>
    <Cell>{quantity}</Cell>
    <Cell>{code.toUpperCase()}</Cell>
    <Cell>{rate}</Cell>
  </Row>
)

export default ExchangeRateRow
