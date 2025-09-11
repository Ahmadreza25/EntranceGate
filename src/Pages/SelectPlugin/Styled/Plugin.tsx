import styled from "styled-components";

const Box = styled.div`
  width: 450px;
  height: 70px;
  border:${({theme}) => theme.borderBox}; 
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Box;
