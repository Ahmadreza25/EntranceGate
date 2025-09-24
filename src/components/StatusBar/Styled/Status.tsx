import styled from "styled-components";

interface StatusProps {
  margintop?: string;
}

const Status = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: ${(props) => props.margintop};
  margin-left: 20px;
  @media (max-width: 480px) {
    margin-left:0px;
  }
`;

export default Status;
