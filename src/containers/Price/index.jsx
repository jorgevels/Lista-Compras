import React from "react";
import ListPrice from "../../components/ListPrice";
import PageLoading from "../../components/PageLoading";
import useInitialState from "../../hooks/useInitialState";
import { Container_lista, Title_lista } from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

/* const API = "http://localhost:3006/api/v1"; */

const SIZE = "40px";
const COLOR = "#FF2D55";

const API =
  "https://backend-lista-compras-production-3365.up.railway.app/api/v1";

const Price = () => {
  const initialState = useInitialState(API, {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
    ],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    mode: "no-cors",
    origin:
      "https://backend-lista-compras-production-3365.up.railway.app/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
    preflightContinue: !1,
    body: JSON.stringify(),
  });

  console.log(initialState);
  return initialState.length === 0 ? (
    <PageLoading />
  ) : (
    <>
      <div className="Header-list">
        <Link to="/" className="Link-header-list">
          <MdKeyboardArrowLeft size={SIZE} color={COLOR} />
        </Link>

        <Title_lista>Lista de precios</Title_lista>
      </div>

      <Container_lista>
        {initialState.products.map((item) => (
          <ListPrice key={item.id} {...item} />
        ))}
      </Container_lista>
    </>
  );
};
export default Price;
