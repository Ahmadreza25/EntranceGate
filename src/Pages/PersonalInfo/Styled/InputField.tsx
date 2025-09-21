import styled from "styled-components";

const InputField = styled.input<{ hasError: boolean }>`
  width: 350px;
  height: 45px;
  outline: none;
  padding-left: 20px;
  border: ${({theme , hasError}) => `1.5px solid ${hasError ? theme.error : theme.border}`};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
`;

export default InputField;
