import styled from "styled-components";

const Box = styled.div`
  width: 450px;
  height: 70px;
  border: ${({ theme }) => theme.borderBox};
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    width: 300px;
    height:50px;
  }
`;

export default Box;
