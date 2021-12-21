import React, { useState } from "react";
import { MdEdit, MdModeEdit, MdSave } from "react-icons/md";
import { List, InputCheckBox, Input, Button } from "./styles";
import "@styles/index.css";

const SIZE = "25px";
const COLOR = "orange";

export default function ListItem({
  todo,
  id,
  checkCompleteTodos,
  handleEditArticulo,
  handleEditCantidad,
  handleEditUnidad,
}) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValueArticulo, setEditValueArticulo] = useState(todo.articuloName);
  const [editValueCantidad, setEditValueCantidad] = useState(todo.cantidadName);
  const [editValueUnidad, setEditValueUnidad] = useState(todo.unidadName);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValueArticulo) {
      handleEditArticulo(editValueArticulo, id);
    } else {
      setEditValueArticulo(todo.articuloName);
    }
    if (editValueCantidad) {
      handleEditCantidad(editValueCantidad, id);
    } else {
      setEditValueCantidad(todo.cantidadName);
    }
    if (editValueUnidad) {
      handleEditUnidad(editValueUnidad, id);
    } else {
      setEditValueUnidad(todo.unidadName);
    }
  };

  if (onEdit) {
    return (
      <div className="listaX">
        <InputCheckBox
          type="checkbox"
          id={id}
          checked={todo.complete}
          onChange={() => checkCompleteTodos(id)}
        />

        <Input
          type="text"
          id="editValue"
          value={editValueArticulo}
          name="editValue"
          onChange={(e) => setEditValueArticulo(e.target.value.toLowerCase())}
        />
        <Input
          type="text"
          id="editValue"
          value={editValueCantidad}
          name="editValue"
          onChange={(e) => setEditValueCantidad(e.target.value.toLowerCase())}
        />
        <Input
          type="text"
          id="editValue"
          value={editValueUnidad}
          name="editValue"
          onChange={(e) => setEditValueUnidad(e.target.value.toLowerCase())}
        />

        <Button onClick={() => handleSave(id)}>
          <MdSave size={SIZE} color={COLOR} />
        </Button>
      </div>
    );
  } else {
    return (
      <div className="lista">
        <div
          htmlFor={id}
          className={todo.complete ? "active" : ""}
          className="itemsx"
        >
          <InputCheckBox
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkCompleteTodos(id)}
          />
        </div>

        <div className="items">
          <div
            htmlFor={id}
            className="items"
            className={todo.complete ? "active" : ""}
          >
            {todo.articuloName}
          </div>
        </div>

        <div className="items">
          <div htmlFor={id} className={todo.complete ? "active" : ""}>
            {todo.cantidadName}
          </div>
        </div>

        <div className="items">
          <div
            htmlFor={id}
            className="items"
            className={todo.complete ? "active" : ""}
          >
            {todo.unidadName}
          </div>
        </div>

        <Button disabled={todo.complete} onClick={handleOnEdit}>
          <MdModeEdit size={SIZE} color={COLOR} />
        </Button>
      </div>
    );
  }
}
