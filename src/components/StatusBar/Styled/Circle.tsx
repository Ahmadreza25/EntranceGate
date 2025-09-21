import styled from "styled-components";

const Circle = styled.div<{counter?:boolean , completed:boolean}>`
  width: 45px;
  height: 45px;
  border: 1px solid #f8fafc;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${({theme , counter , completed}) =>{
    if(counter) return theme.background
    if(completed) return theme.background
    else{
      theme.bgBar
    }
  }}; 

`;

export default Circle;
