import styled from "styled-components";

const Change = styled.p`
  font-weight: 700;
  color: #94a3b8;
  text-decoration-color: #8b5cf6;
  transition: color 0.3s ease;

  &:hover {
    text-decoration-line: underline;
    color: #8b5cf6;
  }
  @media (max-width: 480px) {
    font-weight: 300;
    font-size: 12px;
  }
`;

export default Change;
