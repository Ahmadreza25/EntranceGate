import styled from "styled-components";

const Explanation = styled.p`
  font-weight: 500; 
  font-size: 15px; 
  color:${({theme}) => theme.explanation}; 
  margin-top: 20px;
`;

export default Explanation;
