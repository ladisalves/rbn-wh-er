import React from 'react'
import styled from 'styled-components'

const LoadingDiv = styled.div`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #c9ddf3;
  span {
    display: block;
    margin: 10px auto;
    border: 12px solid #f3f3f3;
    border-top: 12px solid #c0d7f2;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Loading: React.FC = () => (
  <LoadingDiv data-testid='loading'>
    <span />
    loading, please wait ...
  </LoadingDiv>
)
