import styled from "styled-components";

const InputField = styled.input`
  width: 350px;
  height: 45px;
  outline: none;
  padding-left: 20px;
  border:${({theme}) => theme.border}; 
  color:${({theme}) => theme.text};
  border-radius: 5px;
`;

export default InputField;
