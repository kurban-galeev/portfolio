import { useRouter } from "next/router"
import styled from "styled-components"
import { navigationList } from "../utils/constants"

const Container = styled.div`
  display: flex;
  z-index: 11;
  padding: 32px 64px;
  height: 90px;
  align-items: center;
  background-color: rgba(215, 215, 215, 0.1);
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);

`
const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
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
  }
`
const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Logo = styled(Title)`
  font-weight: 700;
  font-size: 34px;
  line-height: 38px;
  padding: 0;

`
const ContainerMenu = styled.div`
  margin-left: 15vw;
`
const Band = styled.div`
  height: 5px;
  width: 100%;
  background: linear-gradient(90deg, #2AA5A0,#E3535D);
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
`

export const Header = () => {
  const router = useRouter()
  return (
    <Container>
      <ContainerLogo onClick={() => router.push('/')}>
        <Band />

        <Logo>
          KURBAN
        </Logo>
        <Logo>
          DEVELOPER
        </Logo>
        <Band />

      </ContainerLogo>

      <ContainerMenu>
        {navigationList.map((item) => (
          <Title key={item.id}>{item.name}</Title>
        ))}
      </ContainerMenu>
    </Container>
  )
}
