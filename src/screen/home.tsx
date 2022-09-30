
import styled from "styled-components";
import { Blot, Content, Header } from "../components";

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
  overflow: hidden;
  display: flex;
  height: 100vh;
	background:linear-gradient(45deg, #2AA5A0, #E3535D, #000000);
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
const ContainerEarth = styled.div`
  position: absolute;
  animation: animate 60s linear infinite;
  width: 35vw;
  right: 10vw;
  top: 10vh;
  @keyframes animate {
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

export const HomeScreen = () => {
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

      {/* <ContainerBlot top="-20" right="10" >
        <Blot />
      </ContainerBlot> */}
      {/* <ContainerBlot top="-10" right="-50" isSmall={false}>
        <Blot />
      </ContainerBlot> */}
      <ContainerEarth>
        <Blot srcImage="/earth.svg" />
      </ContainerEarth>
      {/* <ContainerBlot top="10" right="50">
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      <ContainerBlot left="10" top="-30" isSmall={false}>
        <Blot />
      </ContainerBlot>
      <ContainerBlot right="-40" left="70" top='-30' bottom="-20" >
        <Blot />
      </ContainerBlot>
      <ContainerBlot top="30" right="-70" left="50" isSmall={false}>
        <Blot />
      </ContainerBlot> */}
      <Header />
      <Content />
    </Container >
  )
}
