import styled from "styled-components";

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 50px;
  margin-left: 10px;
  @media (max-width: 480px) {
    display:none;
  }
`;

export default Titles;
