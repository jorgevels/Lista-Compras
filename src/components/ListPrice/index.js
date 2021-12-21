import React from "react";
import {
  StyledList,
  ListaContainer,
  Name_articulos,
  Price_articulos,
  Button,
} from "./styles";

const ListPrice = ({ image, title, price, promotion }) => {
  let value = price;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <StyledList>
        <img src={image} alt={title} />
        <ListaContainer>
          <Name_articulos>{title}</Name_articulos>
          <Price_articulos>
            {formatterPeso.format(value) || "0"}
          </Price_articulos>
        </ListaContainer>
        <Button type="button">{promotion}</Button>
      </StyledList>
    </>
  );
};

export default ListPrice;
