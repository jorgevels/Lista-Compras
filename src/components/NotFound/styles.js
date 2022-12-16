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
    #0f1840;

  overflow: hidden;
  color: #1b1b25;
  text-align: center;

  h1 {
    font-size: 32px;
    color: #ff2d55;
  }

  img {
    width: 200px;
    margin-top: 130px;
  }
`;
const Button = styled.button`
  width: 15rem;
  height: 3rem;
  margin: 0 2px;
  padding: 0.2rem 0;
  justify-content: center;
  border-radius: 10px;
  background: ${colors.meta};
  ${"" /*   background: ${colors.danger}; */}
  color: #fff;
  border-color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.9);
  }
  p {
    color: white;
  }
  a {
    text-decoration: none;
  }
`;

export { Container, Button };
