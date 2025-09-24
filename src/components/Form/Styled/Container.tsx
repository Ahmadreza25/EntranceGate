import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  height: 700px;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 700px;
    background-color: ${({ theme }) => theme.box};
  }
`;

export default Container;
