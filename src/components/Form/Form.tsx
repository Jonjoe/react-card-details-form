import React, {useState} from "react"
import styled from 'styled-components'

import { Button } from '../../components'
import Input from './Input'

const DateWrapper = styled.div`
  display: flex;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  background: white;
  padding-top: 100px;
`

interface FormProps {
  onNameChange: any
  onNumberChange: any
  onExpiryMonthChange: any
  onExpiryYearChange: any
}

export const DEFAULTS_VALUES = {
  NAME: 'Mr John Doe',
  NUMBER: '#'.repeat(16),
  EXPIRY_MONTH: '00',
  EXPIRY_YEAR: '00'
}

export const HANDLES = {
  NAME: 'Name',
  NUMBER: 'Long Card Number',
  EXPIRY_MONTH: 'Expiry Month',
  EXPIRY_YEAR: 'Expiry Year'
}

const Form: React.FC<FormProps> = (props: FormProps): JSX.Element => {
  const { onExpiryMonthChange, onExpiryYearChange, onNameChange, onNumberChange } = props

  const [formData, updateFormData] = useState({
    name: DEFAULTS_VALUES.NAME,
    number: DEFAULTS_VALUES.NUMBER,
    month: DEFAULTS_VALUES.EXPIRY_MONTH,
    year: DEFAULTS_VALUES.EXPIRY_YEAR
  })

  function handleFormChange(handle: string, value: string) {
    switch(handle) {
      case HANDLES.NAME:
        updateFormData({...formData, name: value})
        onNameChange(value)
        return

      case HANDLES.NUMBER:
        updateFormData({...formData, number: value})
        onNumberChange(value)
        return

      case HANDLES.EXPIRY_MONTH:
        updateFormData({...formData, month: value})
        onExpiryMonthChange(value)
        return

      case HANDLES.EXPIRY_YEAR:
        updateFormData({...formData, year: value})
        onExpiryYearChange(value)
        return

      default: 
        return
    }
  }

  return (
    <StyledForm>
      <Input 
        label={HANDLES.NAME}
        value={formData.name} 
        onChange={(value: string) => handleFormChange(HANDLES.NAME, value)} 
      />

      <Input 
        label={HANDLES.NUMBER}
        value={formData.number} 
        onChange={(value: string) => handleFormChange(HANDLES.NUMBER, value)} 
      />

      <DateWrapper>
        <Input 
          label={HANDLES.EXPIRY_MONTH}
          value={formData.month} 
          onChange={(value: string) => handleFormChange(HANDLES.EXPIRY_MONTH, value)} 
        />
        <Input 
          label={HANDLES.EXPIRY_YEAR}
          value={formData.year} 
          onChange={(value: string) => handleFormChange(HANDLES.EXPIRY_YEAR, value)} 
        />
      </DateWrapper>

      <Button />
    </StyledForm>
  )
}

export default Form