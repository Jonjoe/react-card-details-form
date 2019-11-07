import React from 'react'
import styled from 'styled-components'

import {DEFAULTS_VALUES} from '../../components/Form/Form'

const StyledCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const StyledCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  position: relative;
  top: 80px;
  perspective: 1000px;

  &:hover ${StyledCardInner} {
    transform: rotateY(180deg);
  } 
`

const StyledCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
  display: flex;
  flex-direction: column;
`

const StyledCardBack = styled.div`
 position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`

function decorateNumber(number: string): string {
  return number
    .split('')
    .map((character: string, index: number) => {
      if(
        index !== 0 &&
        index % 4 === 0
        ) {
          return ' ' + character
        }
        
        return character
      })
      .join('')
}
  
interface CardProps {
  number: string
  date: string
  name: string
}
  
const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
  const { number, name, date } = props
  const safeName = name === '' ? DEFAULTS_VALUES.NAME : name
  const safeNumber = number === '' ? DEFAULTS_VALUES.NUMBER : number 
  const safeDate = date === '/' ? `${DEFAULTS_VALUES.EXPIRY_MONTH}/${DEFAULTS_VALUES.EXPIRY_YEAR}` : date
    
  return (
    <StyledCard>
      <StyledCardInner>
        <StyledCardFront>
          <span>{safeName}</span>
          <span>{safeDate}</span>
          <span>{decorateNumber(safeNumber)}</span>
        </StyledCardFront>

        <StyledCardBack>
          <span>000</span>
        </StyledCardBack>
      </StyledCardInner>


    </StyledCard>
  )
}

export default Card