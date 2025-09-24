import styled from "styled-components";

const Explanation = styled.p`
  font-weight: 500;
  font-size: 15px;
  color:${({theme}) => theme.explanation}; 
  margin-top: 20px;
  @media (max-width: 480px) {
    width:300px;
    font-size: 13px;
  }
`;

export default Explanation;
