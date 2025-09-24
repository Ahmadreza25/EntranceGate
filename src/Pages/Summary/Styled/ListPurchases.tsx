import styled from "styled-components";

const ListPurchases = styled.div`
  width: 400px;
  height: 210px;
  background-color: #cbd5e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 20px;
  @media (max-width: 480px) {
    width:370px;
    height:160px;
  }
`;

export default ListPurchases;
