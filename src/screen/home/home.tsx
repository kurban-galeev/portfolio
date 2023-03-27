import { useEffect, useState } from "react";
import styled from "styled-components";
import { Blot, Content, Footer, Header } from "../../components";
import { getInfoFromHH } from "../../utils";

interface PropsBlot {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  isSmall?: boolean;
  width?: string;
  height?: string;
}
const Container = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  background: linear-gradient(45deg, #000000, #ffffff);
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
`;
const ContainerEarth = styled.div<{ clockwiseRotation: boolean }>`
  position: absolute;
  z-index: 8;
  animation: ${({ clockwiseRotation }) =>
      clockwiseRotation ? "clockwiseRotation" : "notClockwiseRotation "}
    60s linear infinite;
  border-radius: 10px;
  width: 25vw;
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
`;
const ContainerBlot = styled.div<PropsBlot>`
  position: absolute;
  z-index: 0;
  left: ${({ left }) => left ?? 0}%;
  right: ${({ right }) => right ?? 0}%;
  top: ${({ top }) => top ?? 0}%;
  bottom: ${({ bottom }) => bottom ?? 0}%;
  animation: ${({ isSmall = true }) =>
      isSmall ? "animate_small 8s" : "animate_big 12s"}
    ease infinite;
  width: ${({ width }) => width ?? "25vw"};
  height: ${({ height }) => height ?? "25vh"};

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
`;
const ContainerMoon = styled.div`
  width: 100%;
  height: 100%;
`;

const heandlerRes = async () => {
  try {
    const res = await getInfoFromHH();
    console.log(res);
    return res;
  } catch {}
};

export const HomeScreen = () => {
  const [clockwiseRotation, setClockwiseRotation] = useState(false);
  useEffect(() => {
    heandlerRes();
  }, []);

  return (
    <Container>
      {/* <ContainerBlot left="-20" top="-35" isSmall={false} width="50vw">
        <Blot />
      </ContainerBlot> */}

      <ContainerBlot left="10" top="-30" isSmall={false} width="80vw">
        <Blot />
      </ContainerBlot>

      {/* <ContainerBlot left="5" top="-15" width="30vw">
        <Blot />
      </ContainerBlot> */}

      <ContainerEarth
        clockwiseRotation={clockwiseRotation}
        onClick={() => setClockwiseRotation(!clockwiseRotation)}
      >
        <Blot srcImage="/earth.svg" />
      </ContainerEarth>

      <Header />

      <Content />
      {/* <Content /> */}
      {/* <Content /> */}
      <ContainerMoon>
        <Blot srcImage="/kosmo.svg" />
      </ContainerMoon>
      <Footer />
    </Container>
  );
};
