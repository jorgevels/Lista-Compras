import styled from "styled-components";
import { above, colors } from "@styles/GlobalStyle";

const Container_lista = styled.div`
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 1rem;
  grid-row-gap: 1em;
  display: grid;

  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;

  text-align: center;
  padding-top: 83px;
  padding-bottom: 42px;
  background: #fff;
`;

const Title_lista = styled.h3`
  ${"" /*  padding-top: 50px; */}
  font-size: 18px;
  color: ${colors.obscure};
  text-align: center;
`;

export { Container_lista, Title_lista };
