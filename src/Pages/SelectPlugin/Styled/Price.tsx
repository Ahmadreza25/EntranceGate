import styled from "styled-components";

const Price = styled.p`
  color: ${({ theme }) => theme.colorPrice};
  font-weight: 600;
  @media (max-width: 480px) {
    font-weight: 400;
    font-size: 13px;
  }
`;

export default Price;
