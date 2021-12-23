import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader, Header_icons, Title } from "./styles";
import { DataContext } from "@context/DataProvider";
import { FiList, FiShoppingCart } from "react-icons/fi";
import "@styles/index.css";
import Logo from "../../assets/favicon.png";

const SIZE = "25px";

const App = () => {
  const [todos] = useContext(DataContext);

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === true);
  };

  const Cantidad = () => {
    return todos.filter((todo) => todo);
  };

  return (
    <>
      <StyledHeader>
        <Header_icons>
          <div>
            <p>{Cantidad().length}</p>
            <FiList size={SIZE} />
          </div>

          <div>
            <p> {newTodosComplete().length}</p>
            <FiShoppingCart size={SIZE} />
          </div>
        </Header_icons>
        {/* <div className="Title">
        </div> */}
        <Title>
          <Link to="/">
            <p>Mercando6</p>
            {/*  <img className="Logo_header" src={Logo} alt="logo" /> */}
          </Link>
        </Title>

        <div className="header-container-promo ">
          <div className="header-anuncio-promo">
            <Link to="/price">
              <p>Promociones</p>
            </Link>
          </div>

          <div className="header-container-promo-list">
            <ul>
              <li>Arroz 🍵$2.100</li>
              <li>Panela 🧱$1.200</li>
              <li>Aceite 🧴$9.000</li>
              <li>Leche 🥛$9.000</li>
              <li>Cafe ☕$6.000</li>
              <li>Frijol 🌿$5.000</li>
              <li>Jabon 🧽$1.000</li>
              <li>Galletas 🍪$2.500</li>
              <li>Huevos 🥚$10.000</li>
              <li>Azucar 🧂$2.000</li>
              <li>Queso 🧀$5.500</li>
              <li>XXX 🧀$5.500</li>
            </ul>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default App;
