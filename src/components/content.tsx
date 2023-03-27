import styled from "styled-components";
import { contentText } from "../utils/constants";

const Container = styled.div`
  margin-top: 64px;
  border-radius: 10px;
  margin-left: 64px;
  z-index: 11;
  width: 50%;
  height: 40vh;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  background-color: rgba(215, 215, 215, 0.2);
`;
const Text = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding-left: 30px;
  width: 90%;
  height: 90%;
  line-height: 30px;
  overflow: hidden;
  background-color: #27e6c6;
  background-image: linear-gradient(45deg, #27e6c6, #000000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  -webkit-animation: type 5s steps(50, end);
  animation: type 5s steps(50, end);
  @keyframes type {
    from {
      width: 0;
    }
  }

  @-webkit-keyframes type {
    from {
      width: 0;
    }
  }
`;

export const Content = () => {
  return (
    <Container>
      <Text>{contentText}</Text>
    </Container>
  );
};
