import styled from "styled-components";

interface TitleProps {
    marginright?:string
    marginleft?:string
}

const Title = styled.p<TitleProps>`
    color:${({theme}) => theme.text};
    margin-right:${props => props.marginright};
    margin-left:${props => props.marginleft};
    font-weight: 700;
`

export default Title