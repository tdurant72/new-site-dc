import React from "react"
import styled from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

export default function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Design and code React apps</Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton
            title="Start learning"
            subtitle="100+ hours of learning"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)``
