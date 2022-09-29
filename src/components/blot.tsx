
import styled from "styled-components"

const Image = styled.img`

`
const ContainerLogo = styled.div`
  z-index: 10;
`
interface Props {
  srcImage: string
  width?: string
  height?: string
}
export const Blot = ({ srcImage, width = '50%', height = '50%' }: Props) => {
  return (
    <ContainerLogo>
      <Image src={srcImage} style={{ height, width }} />
    </ContainerLogo>
  )
}
