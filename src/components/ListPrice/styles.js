import styled from "styled-components";
/* import { above, colors } from "@styles/GlobalStyle"; */

const StyledList = styled.div`
  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  border-radius: 5px;
  ${"" /* margin: 0 0 30px 0; */}
  position: relative;

  ${"" /* background-color: #f7fff7; */}
  img {
    width: 100%;
    height: 150px;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
  }
`;
const ListaContainer = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name_articulos = styled.div`
  ${"" /* border: solid 1px blue; */}
  min-width: 150px;
`;
const Price_articulos = styled.div`
  min-width: 150px;
  font-size: 18px;
  color: green;
`;

const Button = styled.button`
  width: 100%;
  height: 35px;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  border: 0px;
  outline: 0;
  ${"" /* cursor: pointer; */}
  font-size: 14px;
  font-weight: 300;
  background-color: #fd3e81;
  &: hover background-color rgba(39, 44, 49, 0.06);
`;

export { StyledList, ListaContainer, Name_articulos, Price_articulos, Button };
