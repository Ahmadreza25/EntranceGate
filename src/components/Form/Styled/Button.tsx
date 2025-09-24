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
  @media (max-width: 480px) {
    font-size:12px;
    width:80px;
    height:30px;
  }
`;

export default Button;
