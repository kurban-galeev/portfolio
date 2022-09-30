
import { useState } from "react";
import styled from "styled-components";
import { Blot, Content, Footer, Header } from "../components";

interface PropsBlot {
  left?: string
  right?: string
  top?: string
  bottom?: string
  isSmall?: boolean
  width?: string
  height?: string
}
const Container = styled.div`
  flex-direction: column;
  justify-content: space-between;

  display: flex;
  height: 100vh;
	background:linear-gradient(45deg, #000000, #ffffff);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
@keyframes gradient {
	0% {
		background-position: 25% 100%;
	}
  25% {
    background-position: 45% 75%;
  }
	50% {
		background-position: 100% 25%;
	}
  75% {
    background-position: 45% 75%;
  }
	100% {
		background-position: 25% 100%;
	}
}
`
const ContainerEarth = styled.div<{ clockwiseRotation: boolean }>`
  position: absolute;
  z-index: 8;
  animation: ${({ clockwiseRotation }) => clockwiseRotation ? 'clockwiseRotation' : 'notClockwiseRotation '} 60s linear infinite;
  border-radius: 999px;
  width: 35vw;
  right: 10vw;
  top: 22vh;

  &: hover {
    cursor: pointer;
  }
  @keyframes clockwiseRotation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes notClockwiseRotation {
    0% {
      transform: rotate(360deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  `
const ContainerBlot = styled.div<PropsBlot>`
  position: absolute;

  left: ${({ left }) => left ?? 0}%;
  right: ${({ right }) => right ?? 0}%;
  top: ${({ top }) => top ?? 0}%;
  bottom: ${({ bottom }) => bottom ?? 0}%;
  animation: ${({ isSmall = true }) => isSmall ? 'animate_small 8s' : 'animate_big 12s'}  ease infinite;
  width: ${({ width }) => width ?? '25vw'};
  height:  ${({ height }) => height ?? '25vh'};

  @keyframes animate_big {
    0% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.04, 1.04, 1.04);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes animate_small {
    0% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.02, 1.02, 1.02);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`
const ContainerMoon = styled.div`
  position: absolute;

  z-index: 9;
  bottom: 0px;
  width: 100%;
`

export const HomeScreen = () => {
  const [clockwiseRotation, setClockwiseRotation] = useState(false)

  return (
    <Container>
      <ContainerBlot left="-20" top="-35" isSmall={false} width='50vw'>
        <Blot />
      </ContainerBlot>

      <ContainerBlot left="5" top="-50" isSmall={false} width='70vw'>
        <Blot />
      </ContainerBlot>

      <ContainerBlot left="5" top="-15" width='30vw'>
        <Blot />
      </ContainerBlot>

      <ContainerEarth clockwiseRotation={clockwiseRotation} onClick={() => setClockwiseRotation(!clockwiseRotation)}>
        <Blot srcImage="/earth.svg" />
      </ContainerEarth>

      <Header />

      <Content />

      <Footer />
      {/*
      <ContainerMoon>
        <Blot srcImage="/kosmo.svg" />
      </ContainerMoon> */}
    </Container >
  )
}
