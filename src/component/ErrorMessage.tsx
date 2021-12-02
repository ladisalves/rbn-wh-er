import React from 'react'
import styled from 'styled-components'

const ErrorDiv = styled.div`
  padding: 10px;
  color: red;
  text-align: center;
  border-radius: 4px;
  border: 1px solid red;
  a,
  a:visited {
    color: red;
  }
`

export const ErrorMessage: React.FC = () => (
  <ErrorDiv data-testid='error-message'>
    Error loading exchange rates, please try it <a href='/'>again</a>.
  </ErrorDiv>
)
