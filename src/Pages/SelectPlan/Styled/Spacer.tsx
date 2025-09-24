import styled from "styled-components";

const Spacer = styled.div`
  margin-top: 60px;
  margin-left:20px;
  @media (max-width: 480px) {
    display:flex;
    alige-items:center;
    justify-content: center;
    flex-direction: column;
    margin-top:0px;
    width: 100px;
    height: 60px;
  }
`;

export default Spacer;
