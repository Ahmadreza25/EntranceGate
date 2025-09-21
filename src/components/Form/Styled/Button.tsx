import styled from "styled-components";

interface ButtonProps {
    bg?:string
}


const Button = styled.button<ButtonProps>`
  width: 130px;
  height: 40px;
  color: #f8fafc;
  background-color:${props => props.bg}; 
  border-radius: 5px;
`;

export default Button;
