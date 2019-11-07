import React from "react"
import styled from 'styled-components'

const StyledPage = styled.main`
  background: #add9e6;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface PageProps {
  children: JSX.Element | JSX.Element[]
}

const Page: React.FC<PageProps> = (props: PageProps): JSX.Element => {
  const { children } = props

  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}

export default Page