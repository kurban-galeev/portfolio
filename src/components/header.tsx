import { useRouter } from "next/router";
import styled from "styled-components";
import { navigationList } from "../utils/constants";

const Container = styled.div`
  display: flex;
  z-index: 11;
  padding: 32px 64px;
  height: 90px;
  align-items: center;
  justify-content: center;
  background-color: rgba(215, 215, 215, 0.1);
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;
const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding-left: 15px;
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
const ContainerLogo = styled.div`
  position: absolute;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled(Title)`
  font-weight: 700;
  font-size: 34px;
  line-height: 38px;
  padding: 0;
`;
const ContainerMenu = styled.div`
  display: flex;
  margin-left: 15vw;
`;
const Band = styled.div`
  height: 5px;
  width: 100%;
  background: linear-gradient(90deg, #2aa5a0, #e3535d);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;

const ContaiterTitle = styled.div`
  margin: 0 5px;
  border-radius: 5px;
  padding-right: 15px;
  background: #e3535d;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;

export const Header = () => {
  const router = useRouter();

  const handlerClick = (item: string) => {
    if (item === "Home") {
      router.push("/");
    } else {
      router.push(
        [item.slice(0, 1).toLowerCase(), item.slice(1, item.length)].join("")
      );
    }
  };

  const clickOnLogo = () => router.push("/");
  return (
    <Container>
      <ContainerLogo onClick={clickOnLogo}>
        <Band />

        <Logo>KURBAN</Logo>
        <Logo>DEVELOPER</Logo>
        <Band />
      </ContainerLogo>

      <ContainerMenu>
        {navigationList.map((item) => (
          <ContaiterTitle>
            <Title key={item.id} onClick={() => handlerClick(item.name)}>
              {item.name}
            </Title>
          </ContaiterTitle>
        ))}
      </ContainerMenu>
    </Container>
  );
};
