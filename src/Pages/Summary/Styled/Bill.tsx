import styled from "styled-components";

const Bill = styled.p`
  width: 300px;
  color:${({theme}) => theme.colorBill};
  @media (max-width: 480px) {
    font-weight:500;
    font-size: 12px;
  }
`;

export default Bill;
