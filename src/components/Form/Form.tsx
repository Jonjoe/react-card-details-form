import React, {useState} from "react"
import styled from 'styled-components'
import validate from 'validate.js'

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

export const DEFAULTS_VALUES = {
  NAME: 'Mr John Doe',
  NUMBER: '#'.repeat(16),
  EXPIRY_MONTH: '00',
  EXPIRY_YEAR: '00',
  CVV: '000'
}

export const HANDLES = {
  NAME: 'Name',
  NUMBER: 'Long Card Number',
  EXPIRY_MONTH: 'Expiry Month',
  EXPIRY_YEAR: 'Expiry Year',
  CVV: 'CVV Number'
}

interface FormProps {
  onNameChange: any
  onCVVChange: any
  onNumberChange: any
  onExpiryMonthChange: any
  onExpiryYearChange: any
  onCardBackActivation: any
}

const Form: React.FC<FormProps> = (props: FormProps): JSX.Element => {
  const { onExpiryMonthChange, onExpiryYearChange, onNameChange, onNumberChange, onCardBackActivation, onCVVChange } = props

  const [formData, updateFormData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvv: ''
  })

  function handleFormChange(handle: string, value: string) {
    switch(handle) {
      case HANDLES.NAME:
        updateFormData({...formData, name: value})
        onNameChange(value)

        return

      case HANDLES.NUMBER:
        if(value.length <= 16 && isNumeric(value)) {
          updateFormData({...formData, number: value})
          onNumberChange(value)
        }

        return

      case HANDLES.EXPIRY_MONTH:
        if(value.length <= 2 && isNumeric(value)) {
          updateFormData({...formData, month: value})
          onExpiryMonthChange(value)
        }

        return
      
      case HANDLES.EXPIRY_YEAR:
        if(value.length <= 2 && isNumeric(value)) {
          updateFormData({...formData, year: value})
          onExpiryYearChange(value)
        }

        return

      case HANDLES.CVV:
        if(value.length <= 3 && isNumeric(value)) {
          updateFormData({...formData, cvv: value})
          onCVVChange(value)
        }

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
        onClick={() => onCardBackActivation(false)}
      />

      <Input 
        label={HANDLES.NUMBER}
        value={formData.number} 
        onChange={(value: string) => handleFormChange(HANDLES.NUMBER, value)} 
        onClick={() => onCardBackActivation(false)}
      />

      <DateWrapper>
        <Input 
          label={HANDLES.EXPIRY_MONTH}
          value={formData.month} 
          onChange={(value: string) => handleFormChange(HANDLES.EXPIRY_MONTH, value)} 
          onClick={() => onCardBackActivation(false)}
        />
        <Input 
          label={HANDLES.EXPIRY_YEAR}
          value={formData.year} 
          onChange={(value: string) => handleFormChange(HANDLES.EXPIRY_YEAR, value)} 
          onClick={() => onCardBackActivation(false)}
        />
        <Input 
          label={HANDLES.CVV}
          value={formData.cvv} 
          onChange={(value: string) => handleFormChange(HANDLES.CVV, value)} 
          onClick={() => onCardBackActivation(true)}
        />
      </DateWrapper>

      <Button />
    </StyledForm>
  )
}

function isNumeric(string: string){
    return /^\d+$/.test(string);
}

export default Form