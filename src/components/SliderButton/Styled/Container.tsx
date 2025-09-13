import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export default Container;
