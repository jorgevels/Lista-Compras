import React, { useContext } from "react";
import ListItem from "../ListItem";
import { DataContext } from "@context/DataProvider";

export default function List() {
  const [list, setList] = useContext(DataContext);

  const switchComplete = (id) => {
    const newArticulo = [...list];
    newArticulo.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setList(newArticulo);
  };

  const handleEditArticulo = (editvalueArticulo, id) => {
    const newArticulo = [...list];
    newArticulo.forEach((todo, index) => {
      if (index === id) {
        todo.articuloName = editvalueArticulo;
      }
    });
    setList(newArticulo);
  };

  const handleEditCantidad = (editvalueCantidad, id) => {
    const newArticulo = [...list];
    newArticulo.forEach((todo, index) => {
      if (index === id) {
        todo.cantidadName = editvalueCantidad;
      }
    });
    setList(newArticulo);
  };

  const handleEditUnidad = (editvalueUnidad, id) => {
    const newArticulo = [...list];
    newArticulo.forEach((todo, index) => {
      if (index === id) {
        todo.unidadName = editvalueUnidad;
      }
    });
    setList(newArticulo);
  };

  return (
    <div className="table-lista">
      {list.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkCompleteTodos={switchComplete}
          handleEditArticulo={handleEditArticulo}
          handleEditCantidad={handleEditCantidad}
          handleEditUnidad={handleEditUnidad}
        />
      ))}
    </div>
  );
}
