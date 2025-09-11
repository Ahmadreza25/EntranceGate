import styled from "styled-components";

const BoxTariffs = styled.div`
  width: 500px;
  height: 60px;
  background-color:${({ theme }) => theme.background};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default BoxTariffs;
