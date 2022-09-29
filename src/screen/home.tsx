
import styled from "styled-components";
import { Blot, Header } from "../components";

const Container = styled.div`
  padding: 0px;

  margin: 0px;
  display: flex;
  height: 100vh;
	background:linear-gradient(45deg, #39053b, #ffffff);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;

@keyframes gradient {
	0% {
		background-position: 50% 75%;
	}
  25% {
    background-position: 75% 67%;
  }
	50% {
		background-position: 100% 50%;
	}
  75% {
    background-position: 75% 67%;
  }
	100% {
		background-position: 50% 75%;
	}
}
`

const ContainerBlot = styled.div<{ left?: string, right?: string, top?: string, bottom?: string, isSmall?: boolean }>`
  position: absolute;
  left: ${({ left }) => left ? left : 0}%;
  right: ${({ right }) => right ? right : 0}%;
  top: ${({ top }) => top ? top : 0}%;
  bottom: ${({ bottom }) => bottom ? bottom : 0}%;

  animation: ${({ isSmall = true }) => isSmall ? 'animate_small 8s' : 'animate_big 12s'}  ease infinite;

  @keyframes animate_big {
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
      <ContainerBlot left="-30" top="-40" isSmall={false}>
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      <ContainerBlot top="-20" right="10" >
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      <ContainerBlot top="-10" right="-50" isSmall={false}>
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      <ContainerBlot bottom="50" left="70">
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      {/* <ContainerBlot top="10" right="50">
        <Blot srcImage="/back.png" />
      </ContainerBlot> */}
      <ContainerBlot left="10" top="-30" isSmall={false}>
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      <ContainerBlot right="-40" left="70" top='-30' bottom="-20" >
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      <ContainerBlot top="30" right="-70" left="50" isSmall={false}>
        <Blot srcImage="/back.png" />
      </ContainerBlot>
      <Header />
    </Container >
  )
}
