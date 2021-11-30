import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { ExchangeRate } from '../types'
import ConversionResult from './ConversionResult'
import { normalizeAmount } from '../util/normalizeAmount'

type ConversationFormProps = {
  rates: ExchangeRate[]
}

type FormType = {
  amount: string
  code: string
}

const StyledForm = styled.form`
  padding: 10px 30px;
  background: #f8e4e3;
  border-radius: 4px;
  h3 {
    margin: 3px 0;
    padding: 0;
  }
  input,
  select {
    display: inline-block;
    margin: 5px 0;
  }
`

const ConversionForm: React.FC<ConversationFormProps> = ({ rates }: ConversationFormProps) => {
  const [amount, setAmount] = useState<number | undefined>()
  const [selectedCode, setSelectedCode] = useState<string | undefined>()
  const showResult = !!amount && !!selectedCode
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: FormType) => {
    setAmount(normalizeAmount(data.amount))
    setSelectedCode(data.code)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h3>Convert CZK</h3>
      <div>
        <input
          placeholder='amount'
          className='form-control'
          type='text'
          {...register('amount', { required: true, pattern: /[0-9]+[.|,]?[0-9]*/ })}
        />
        {' CZK to '}
        <select className='form-select' {...register('code', { required: true })}>
          {rates.map(({ code }) => (
            <option value={code}>{code}</option>
          ))}
        </select>{' '}
        <input type='submit' value='Convert' />
      </div>
      {showResult && <ConversionResult amount={amount} currencyCode={selectedCode} rates={rates} />}
    </StyledForm>
  )
}

export default ConversionForm
