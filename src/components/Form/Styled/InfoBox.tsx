import styled from "styled-components";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 450px;
  margin-left: 80px;
  @media (max-width: 480px) {
    width:440px;
    height:450px;
    margin-left:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 10;
  }
`;

export default InfoBox;
