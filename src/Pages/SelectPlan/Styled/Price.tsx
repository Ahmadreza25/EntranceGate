import styled from "styled-components";

const Price = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.explanation};
  @media (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;
  }
`;
export default Price;
