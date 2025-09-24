import styled from "styled-components";

const Bar = styled.div`
  width: 280px;
  height: 530px;
  background-color:${({theme}) => theme.bgBar};
  border-radius: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    width: 450px;
    height:100px;
  }
`;

export default Bar;
