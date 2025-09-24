import styled from "styled-components";

const InputField = styled.input<{ hasError: boolean }>`
  width: 350px;
  height: 45px;
  outline: none;
  padding-left: 20px;
  border: ${({ theme, hasError }) =>
    `1.5px solid ${hasError ? theme.error : theme.border}`};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  @media (max-width: 480px) {
    width: 300px;
    height:35px;
    padding-left: 10px;
    font-size:12px;
  }
`;

export default InputField;
