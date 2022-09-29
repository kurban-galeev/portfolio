import styled from "styled-components"
import { navigationList } from "../units/constants"

const Container = styled.div`
  display: flex;
  z-index: 11;
  padding: 32px;
  height: 90px;
  align-items: center;
`
const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding-left: 16px;
  line-height: 30px;
  color: #ffffff;
`
const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid 3px #ffffff;
  border-bottom: solid 3px #ffffff;
  align-items: center;
`
const Logo = styled(Title)`
  font-weight: 700;
  font-size: 34px;
  line-height: 38px;
  padding: 0;
`

export const Header = () => {
  return (
    <Container>
      <ContainerLogo>
        <Logo>
          KURBAN
        </Logo>
        <Logo>
          DEVELOPER
        </Logo>
      </ContainerLogo>
      {navigationList.map((item) => (
        <Title key={item.id}>{item.name}</Title>
      ))}
    </Container>
  )
}
