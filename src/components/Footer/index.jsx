import React from "react";
import { Nav, Container, Info } from "./styles";
import Information from "../Information";
import { MdInfoOutline, MdInfo } from "react-icons/md";

const SIZE = "32px";
const COLOR = "#fd3e81";

const Footer = () => {
  return (
    <>
      <Nav>
        <Info></Info>
        <h3>Hecho con 💛 © 2021</h3>

        <Container>
          <div>
            <MdInfo onClick={Information} size={SIZE} color={COLOR} />
          </div>
        </Container>
      </Nav>
    </>
  );
};
export default Footer;
