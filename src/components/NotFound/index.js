import React from "react";
/* import { Button } from "../Welcome/styles"; */
import { Link } from "react-router-dom";

import { Container, Button } from "./styles";

const LOGO_NOTFUND =
  "https://res.cloudinary.com/imagesfull/image/upload/v1589505519/like/astronaut_vql4jb.png";
const NotFound = () => (
  <Container>
    <img src={LOGO_NOTFUND} alt="Astronauts" />
    <h1>
      404
      <br />
      PÁGINA NO ENCONTRADA
    </h1>
    <Button>
      <Link to="/">
        <p>Volver a la pagina de inicio</p>
      </Link>
    </Button>
  </Container>
);

export default NotFound;
