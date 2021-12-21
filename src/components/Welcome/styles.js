import styled from "styled-components";
import { above, colors } from "@styles/GlobalStyle";

const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 41px;
  position: fixed;
  z-index: 2000;
  margin-top: 20px;
`;

const Title = styled.h2`
  padding-top: 80px;
  color: ${colors.obscure};
`;

const Button = styled.button`
  width: 6rem;
  margin: 0 2px;
  padding: 0.2rem 0;
  border-radius: 25px;
  background: ${colors.danger};
  color: #fff;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export { ContainerFooter, Title, Button };
