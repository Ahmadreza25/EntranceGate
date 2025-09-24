import styled from "styled-components";

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 300px;
  @media (max-width: 480px) {
    width: 170px;
  }
`;

export default Description;
