import styled from "styled-components";

const Total = styled.p`
  color:${({theme}) => theme.colorTotal};
  width: 280px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-weight:500;
    font-size: 12px;
  }
`;

export default Total;
