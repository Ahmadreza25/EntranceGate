import styled from "styled-components";

const FormInfo = styled.div`
  width: 600px;
  height: 530px;
  background-color: ${({ theme }) => theme.box};
  border-radius: 10px;
  @media (max-width: 480px) {
    width:100%;
  }
`;

export default FormInfo;
