import styled from "styled-components"
import { Blot } from "./blot"

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: ;
  height: 120px;
  weight: 100%;
  background-color: rgba(215, 215, 215, 0.1);
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`
const Title = styled.span`
  z-index: 10;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding-left: 30px;
  line-height: 30px;
  background-color: #2AA5A0;
  background-image: linear-gradient(90deg, #E3535D, #2AA5A0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: #E3535D;
    background-image: linear-gradient(90deg, #2AA5A0,#E3535D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }`
const ContainerMoon = styled.div`
  position: absolute;
  width: 100%;
`

export const Footer = () => {
  return (
    <Container>
      <ContainerMoon>
        <Blot srcImage="/kosmo.svg" />
      </ContainerMoon>
      <Title>Powered by Kurban-family © 2022-infinity Kirill Glebov</Title>
    </Container>
  )
}
