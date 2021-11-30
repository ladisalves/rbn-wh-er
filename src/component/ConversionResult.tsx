import { convertRate, getRoundedAmount } from '../util/convertRate'
import { useMemo } from 'react'
import { ExchangeRate } from '../types'

type ConversationFormProps = {
  amount: number
  currencyCode: string
  rates: ExchangeRate[]
}

const ConversionResult: React.FC<ConversationFormProps> = ({ amount, currencyCode, rates }: ConversationFormProps) => {
  const convertedAmount = useMemo(() => convertRate(amount, currencyCode, rates), [amount, currencyCode])

  return (
    <div>
      {getRoundedAmount(amount)} CZK equals <strong>{convertedAmount}</strong>
    </div>
  )
}

export default ConversionResult
