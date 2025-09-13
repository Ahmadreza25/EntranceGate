import styled from "styled-components";




const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #8b5cf6;
  }

  &:checked + span:before {
    transform: translateX(22px);
  }
`;

export default Checkbox