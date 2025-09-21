import styled from "styled-components";

const TitleInfo = styled.p<{colorError:boolean}>`
  font-size: 13px;
  font-weight: 500;
  color:${({theme , colorError}) => colorError ? theme.error : theme.text};
`;

export default TitleInfo;
