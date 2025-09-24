import styled from "styled-components";

interface PriceProps {
    font:string
}

const Price = styled.p<PriceProps>`
  font-weight:${props => props.font};
  color:${({theme}) => theme.colorPrice};
  @media (max-width: 480px) {
    font-weight:300;
    font-size: 12px;
  }
`;

export default Price;
