import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  background: #252627;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr minmax(160px, 1fr) minmax(40px, 1fr);
  height: 40px;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;

  h3 {
    font-size: 12px;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    align-items: center;
    justify-content: center;
  }
`;

export const Info = styled.div``;
