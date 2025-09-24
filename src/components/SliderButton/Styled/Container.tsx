import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 480px) {
    background-color: ${({ theme }) => theme.box};
  }
`;

export default Container;
