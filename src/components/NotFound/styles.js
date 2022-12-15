import styled from "styled-components";
import { above, colors } from "@styles/GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url("https://res.cloudinary.com/imagesfull/image/upload/v1587758568/like/stars_jwrc2k.svg"),
    #85c638;

  overflow: hidden;
  color: #1b1b25;
  text-align: center;

  h1 {
    font-size: 32px;
  }

  img {
    width: 200px;
    margin: 130px;
  }
`;
const Button = styled.button`
  width: 15rem;
  margin: 0 2px;
  padding: 0.2rem 0;
  justify-content: center;
  border-radius: 10px;
  background: ${colors.obscure};
  ${"" /*   background: ${colors.danger}; */}
  color: #fff;
  border-color: transparent;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export { Container, Button };
