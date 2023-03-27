import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const ContainerLogo = styled.div`
  z-index: 10;
`;
interface Props {
  srcImage?: string;
}
export const Blot = ({ srcImage = "/back.svg" }: Props) => {
  return (
    <ContainerLogo>
      <Image src={srcImage} />
    </ContainerLogo>
  );
};
