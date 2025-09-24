import styled from "styled-components";

const Bill = styled.p`
  font-weight: 700;
  color:${({ theme }) => theme.text};
  @media (max-width: 480px) {
    font-weight: 400;
    font-size:13px;
  }
`;

export default Bill;
