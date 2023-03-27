import styled from "styled-components";
import { Blot } from "./blot";

const Container = styled.div`
  display: flex;
  align-items: center;
  /* z-index: 10; */
  justify-content: center;
  height: 120px;
  weight: 100%;
  background-color: rgba(215, 215, 215, 0.1);
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;
const Title = styled.span`
  z-index: 10;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding-left: 30px;
  line-height: 30px;
  background-color: #2aa5a0;
  background-image: linear-gradient(90deg, #e3535d, #2aa5a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: #e3535d;
    background-image: linear-gradient(90deg, #2aa5a0, #e3535d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const ContainerMoon = styled.div`
  position: absolute;
  width: 100%;
`;

const ContainerTitle = styled.div`
  bottom: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Powered by Kurban-family © 2022-infinity Kirill Glebov</Title>
      </ContainerTitle>
    </Container>
  );
};
