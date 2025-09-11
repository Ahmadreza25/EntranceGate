import styled from "styled-components";

interface PriceProps {
    font:string
}

const Price = styled.p<PriceProps>`
  font-weight:${props => props.font};
  color:${({theme}) => theme.colorPrice};
`;

export default Price;
