import styled from "styled-components";

const Plans = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default Plans;
