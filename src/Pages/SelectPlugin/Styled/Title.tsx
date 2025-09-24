import styled from "styled-components";

const Title = styled.p`
  font-weight: 800;
  font-size: 20px;
  color:${({theme}) => theme.text};
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export default Title;
