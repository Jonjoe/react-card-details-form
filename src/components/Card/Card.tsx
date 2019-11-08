import React from 'react'
import styled from 'styled-components'

import { Icon } from "../../components"
import {DEFAULTS_VALUES} from '../../components/Form/Form'



const StyledCard = styled.div`
  background-color: transparent;
  width: 430px;
  height: 270px;
  position: relative;
  top: 80px;
  perspective: 1000px;
`

interface StyledCardInnerProps {
  backActive: boolean
}

const StyledCardInner = styled.div<StyledCardInnerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
  box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.3);
  transform: ${props => props.backActive ? 'rotateY(180deg)' : 'rotateY(0)'};
`

const StyledCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
`

const StyledCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  background-color: #bbb;
  color: white;
  transform: rotateY(180deg);

`

const StyledMagStrip = styled.div`
  width: 100%;
  height: 50px;
  background: #454545;
  margin-top: 10%;
`

const StyledCVV = styled.span `
  display: block;
  background: white;
  padding: 5px;
  width: 75px;
  height: 18px;
  text-align: center;
  color: #454545;
  font-weight: 900;
`


const StyledCardNumber = styled.span`
  font-size: 2.2rem;
  text-align: center;
  width: 100%;
`

const StyledChip = styled.div`
  width: 100px;
  margin-top: -20px;
  img {
    width: 100%;
  }
`

const StyledCardBottomRow = styled.div`
  display: flex;
  width: 100%;
`

const StyledCardPersonalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 5px;
  padding-left: 10px;
`

const StyledCardTypeIcon = styled.div`
  flex: 1;
  width: 100%;
  text-align: right;
  font-size: 5rem;
  color: white;
`
  
interface CardProps {
  name: string
  number: string
  date: string
  cvv: string
  backActive: boolean
}
  
const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
  const { number, name, date, cvv, backActive } = props
  const safeName = name === '' ? DEFAULTS_VALUES.NAME : name
  const safeNumber = number === '' ? DEFAULTS_VALUES.NUMBER : number 
  const safeDate = date === '/' ? `${DEFAULTS_VALUES.EXPIRY_MONTH}/${DEFAULTS_VALUES.EXPIRY_YEAR}` : date
    
  return (
    <StyledCard>
      <StyledCardInner backActive={backActive}>
        <StyledCardFront>
          <StyledChip>
            <img src={require('./images/chip.png')} />
          </StyledChip>

          
          <StyledCardNumber>{decorateNumber(safeNumber)}</StyledCardNumber>
          
          
          <StyledCardBottomRow>
            <StyledCardPersonalInfo>
              <span>{safeName.toUpperCase()}</span>
              <span>{safeDate}</span>
            </StyledCardPersonalInfo>

            <StyledCardTypeIcon>
              <Icon name="visa" />
            </StyledCardTypeIcon>
          </StyledCardBottomRow>
        </StyledCardFront>

        <StyledCardBack>
          <StyledMagStrip />
          <StyledCVV>{cvv}</StyledCVV>
        </StyledCardBack>
      </StyledCardInner>


    </StyledCard>
  )
}

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

export default Card