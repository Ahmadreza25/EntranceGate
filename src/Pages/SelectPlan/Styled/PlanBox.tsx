import styled from "styled-components";

const PlanBox = styled.div`
  width: 160px;
  height: 190px;
  border:1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  @media (max-width: 480px) {
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:5px;
  }
`;
export default PlanBox;
