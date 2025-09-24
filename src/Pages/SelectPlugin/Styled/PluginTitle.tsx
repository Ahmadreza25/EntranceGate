import styled from "styled-components";

const PluginTitle = styled.p`
  font-weight: 700;
  color:${({theme}) => theme.text};
  @media (max-width: 480px) {
    font-weight:500;
    font-size: 13px;
  }
`;

export default PluginTitle;
