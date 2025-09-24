import styled from "styled-components";

const BoxTariffs = styled.div`
  width: 500px;
  height: 60px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    width: 300px;
    height: 40px;
  }
`;

export default BoxTariffs;
