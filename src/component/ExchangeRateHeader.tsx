import styled from 'styled-components'
import React from 'react'

const Header = styled.div`
  display: table-row;
  text-weight: bold;
`

const Cell = styled.div`
  display: table-cell;
  font-weight: bold;
  background: #c0d7f2;
`

const ExchangeRateHeader: React.FC = () => (
  <>
    <Header data-testid={'rate-list-header'}>
      <Cell>Country</Cell>
      <Cell>Currency</Cell>
      <Cell>Quantity</Cell>
      <Cell>Code</Cell>
      <Cell>Rate</Cell>
    </Header>
  </>
)

export default ExchangeRateHeader
