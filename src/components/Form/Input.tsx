import React from "react"
import styled from "styled-components"
import { tsPropertySignature } from "@babel/types"

const StyledInputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`

const StyledInputLabel = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`

const StyledInputField = styled.div`
  input {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
  }
`

interface InputProps {
  label: string
  onChange: any
  onClick: any
  value: string
}

const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  const { value, onChange, label, onClick} = props

  function handleInputChange(event: any) {
    console.log('fired!!')
    onChange(event.target.value)
  }

  return (
    <StyledInputContainer>
      <StyledInputLabel>
      <span>{label}</span>
      </StyledInputLabel>

      <StyledInputField>
        <input 
          onClick={() => onClick()}
          onChange={(event: any) => handleInputChange(event)}
          value={value}
          type="text" 
        />
      </StyledInputField>
    </StyledInputContainer>
  )
}

export default Input