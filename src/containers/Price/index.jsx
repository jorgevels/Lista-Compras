import React from "react";
import ListPrice from "../../components/ListPrice";
import PageLoading from "../../components/PageLoading";
import useInitialState from "../../hooks/useInitialState";
import { Container_lista, Title_lista } from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

/* const API = "https://us-central1-gndx-fake-api.cloudfunctions.net/api"; */

/* const API = "http://localhost:3006/api/v1"; */

const SIZE = "40px";
const COLOR = "#fd3e81";

const API = "https://listacompras-ts.herokuapp.com/api/v1";

const Price = () => {
  const initialState = useInitialState(API);

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
