import React from "react"
import styled from "styled-components"
export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/hero-wave1.svg"
        alt="wave1"
        style={{ top: "100px", filter: "blur(5px)", opacity: "0.5" }}
      />
      <Wave
        src="/images/waves/hero-wave2.svg"
        alt="wave2"
        style={{ top: "50px" }}
      />
      <Wave
        src="/images/waves/hero-wave3.svg"
        alt="wave3"
        style={{ top: "550px" }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`
const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`
