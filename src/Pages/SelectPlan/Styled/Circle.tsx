import styled from "styled-components";

interface CircleProps {
    bg?:string
}

const Circle = styled.div<CircleProps>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color:${props => props.bg};
  margin-top: 20px;
  margin-left: 20px;
  @media (max-width: 480px) {
    margin-top:0px;
    width: 30px;
    height: 30px;
  }
`;

export default Circle;
