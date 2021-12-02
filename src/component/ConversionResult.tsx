import { convertRate, getRoundedAmount } from '../util/convertRate'
import { useMemo } from 'react'
import styled from 'styled-components'
import { ExchangeRate } from '../types'
import { formatAmount } from '../util/formatAmount'

type ConversationFormProps = {
  amount: number
  currencyCode: string
  rates: ExchangeRate[]
}

const ResultDiv = styled.div`
  margin: 15px 0;
  font-size: 14pt;
`

const ConversionResult: React.FC<ConversationFormProps> = ({ amount, currencyCode, rates }: ConversationFormProps) => {
  const convertedAmount = useMemo(
    () => getRoundedAmount(convertRate(amount, currencyCode, rates)),
    [amount, currencyCode],
  )

  return (
    <ResultDiv data-testid='conversion-result'>
      {formatAmount(amount, 'CZK')} equals {formatAmount(convertedAmount, currencyCode)}
    </ResultDiv>
  )
}

export default ConversionResult
