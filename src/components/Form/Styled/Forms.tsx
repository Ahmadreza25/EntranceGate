import styled from "styled-components";

const Forms = styled.div`
  width: 920px;
  height: 550px;
  background-color: ${({ theme }) => theme.box};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top:-80px;
  }
`;

export default Forms;
