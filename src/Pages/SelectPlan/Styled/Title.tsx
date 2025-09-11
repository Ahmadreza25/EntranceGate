import styled from "styled-components";

const Title = styled.p`
  font-weight: 800;
  font-size: 20px;
  color:${({ theme }) => theme.text};
`;

export default Title;
