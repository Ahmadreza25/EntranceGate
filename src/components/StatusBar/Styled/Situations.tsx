import styled from "styled-components";

const Situations = styled.div`
  width: 270px;
  height: 400px;
  @media (max-width: 480px) {
    width: 450px;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export default Situations;
