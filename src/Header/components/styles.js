import styled from "styled-components";
import { colors, above } from "@styles/GlobalStyle";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr minmax(160px, 1fr) minmax(40px, 1fr);
  align-items: center;
  text-align: center;
  position: fixed;
  background: #f1d302;
  z-index: 100000;

  & h3 {
    text-align: center;
    font-size: 20px;
    ${above.small`
    font-size:10px;
  `};
    ${above.mediu`
    
    font-size: 18px;
  `};
    ${above.mediumL`
    
    font-size: 20px;
  `};
  }

  & img {
    width: 27px;
    border-radius: 40px;
  }
`;

const Header_icons = styled.div`
  display: flex;
  text-align: center;
  padding-inline-start: 20%;

  & p {
    color: white;
    margin-top: -8px;
    font-size: 12px;

    width: 15px;
    margin-left: 8px;
    position: absolute;
    background-color: red;
    border-radius: 100px;
    justify-content: center;
    text-align: center;
  }
  & div {
    ${"" /*  margin: 0 0 0 10px; */}
    padding: 0;
    margin-bottom: -22px;
    text-align: center;
  }
  ${above.small`
    padding-inline-start: 4%;
   
  `};
  ${above.mediu`
    
    padding-inline-start: 6%;
  `};
  ${above.mediumL`
    
    padding-inline-start: 25%;
  `};
`;

const Title = styled.h3`
  p {
    font-size: 25px;
    font-family: "Shadows Into Light", cursive;
    color: ${colors.obscure};
  }
`;

export { StyledHeader, Header_icons, Title };
