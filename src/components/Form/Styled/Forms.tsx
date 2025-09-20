import styled from "styled-components";

const Forms = styled.div`
  width: 920px;
  height: 550px;
  background-color:${({ theme }) => theme.box};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Forms;
