import React, { useContext, useState } from "react";
import { DataContext } from "@context/DataProvider";
import { ContainerFooter, Title, Button } from "./styles";
import Swal from "sweetalert2";

export default function Welcome() {
  const [todos, setTodos] = useContext(DataContext);

  const newTodosComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  const swalDelete = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras recuperar los articulos eliminados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(newTodosComplete());
        Swal.fire("Eliminado!", "Articulos eliminados.", "success");
      }
    });
  };

  const swalWiltoutSelection = () => {
    todos.find((todo) => todo.complete)
      ? swalDelete()
      : Swal.fire(
          "Ninguna selección ",
          "Debes seleccionar al menos un articulo!",
          "info"
        );
  };
  const HandleDeleteClick = () => {
    todos.find((todo) => todo.complete) ? swalDelete() : swalWiltoutSelection();
  };

  return (
    <>
      {todos.length === 0 ? (
        <Title>
          Bienvenido a almacenes Exito 🎁!<br></br> Con esta App podras crear tu
          lista de compras y verificar los precios de los productos mas
          destacados.
        </Title>
      ) : (
        <ContainerFooter>
          <Button onClick={HandleDeleteClick}>Delete</Button>
        </ContainerFooter>
      )}
    </>
  );
}
