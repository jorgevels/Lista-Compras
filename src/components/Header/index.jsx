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
            <p>Mercando778</p>
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
              <li>Arroz ๐ต$2.100</li>
              <li>Panela ๐งฑ$1.200</li>
              <li>Aceite ๐งด$9.000</li>
              <li>Leche ๐ฅ$9.000</li>
              <li>Cafe โ$6.000</li>
              <li>Frijol ๐ฟ$5.000</li>
              <li>Jabon ๐งฝ$1.000</li>
              <li>Galletas ๐ช$2.500</li>
              <li>Huevos ๐ฅ$10.000</li>
              <li>Azucar ๐ง$2.000</li>
              <li>Queso ๐ง$5.500</li>
              <li>XXX ๐ง$5.500</li>
            </ul>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default App;
