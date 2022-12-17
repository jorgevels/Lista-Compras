import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "@context/DataProvider";
import {
  Select,
  Input,
  Container,
  Containers,
  Button,
  Button_list,
} from "./styles";
import { MdAddBox, MdEdit, MdAlarmOn, MdListAlt } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
/* import ListArticulos from "../ListArticulos"; */

const SIZE = "30px";
const COLOR = "#fd3e81";

export default function FormInput() {
  const [list, setList] = useContext(DataContext);

  const [articuloName, setArticuloName] = useState("");
  const [cantidadName, setCantidadName] = useState("");
  const [unidadName, setUnidadName] = useState("");
  const todoInput = useRef();

  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);
  /* const [checkAll, setCheckAll] = useContext(DataContext); */

  /* const checkAll = () => false; */

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        articuloName: articuloName,
        cantidadName: cantidadName,
        unidadName: unidadName,
        complete: false,
      },
    ]);

    setArticuloName("");
    setCantidadName("");
    setUnidadName("");

    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);

  return (
    <>
      <Container>
        <div className="item">
          <div className="idName">Selección</div>
        </div>
        <div className="item">
          <div className="idName">Nombre del Articulo</div>
        </div>
        <div className="item">
          <div className="idCant">Cantidad</div>
        </div>
        <div className="item">
          <div className="idUnid">Unidad</div>
        </div>

        <div className="item">
          <Link to="*price">
            <BsCardList size={SIZE} color={COLOR} />
          </Link>
        </div>
        {/* <Button_list>
        </Button_list> */}
      </Container>

      <form autoComplete="off" onSubmit={addTodo}>
        <Containers>
          <Input
            type="checkbox"
            name="all"
            id="all"
            onChange={handleCheckAll}
          />

          <Input
            type="text"
            name="articulo"
            id="articulo"
            required
            list={"LisArticulos"}
            ref={todoInput}
            placeholder="Ingresa un articulo"
            value={articuloName}
            onChange={(e) => setArticuloName(e.target.value.toLowerCase())}
          />

          <Select
            value={cantidadName}
            onChange={(e) => setCantidadName(e.target.value.toLowerCase())}
            required
          >
            <option value=""> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </Select>

          <Select
            value={unidadName}
            onChange={(e) => setUnidadName(e.target.value)}
            required
          >
            <option value=""> </option>
            <option value="LB">LB</option>
            <option value="KL">KL</option>
            <option value="PK">PK</option>
            <option value="BL">BL</option>
            <option value="LT">LT</option>
            <option value="CB">CB</option>
            <option value="Caj">Caj</option>
            <option value="Ud">Ud</option>
            <option value="Uds">Uds</option>
          </Select>

          <Button type="submit">
            <MdAddBox size={SIZE} color={COLOR} />
          </Button>
        </Containers>
      </form>
      <datalist id="LisArticulos">
        <option value="Aceite"></option>
        <option value="Ajo en polvo"></option>
        <option value="Ajos"></option>
        <option value="Alverjas"></option>
        <option value="Ambientadores"></option>
        <option value="Apio"></option>
        <option value="Arracacha"></option>
        <option value="Arroz"></option>
        <option value="Avena"></option>
        <option value="Azucar"></option>
        <option value="Bananos"></option>

        <option value="Brócoli"></option>
        <option value="Café instantáneo"></option>
        <option value="Camarones"></option>
        <option value="Carne Molida"></option>
        <option value="Cebolla cabezona"></option>
        <option value="Cebolla en Polvo"></option>
        <option value="Cebollas larga"></option>
        <option value="Cebollín"></option>
        <option value="Cepillos de dientes"></option>
        <option value="Cereales en caja"></option>

        <option value="Cervezas"></option>
        <option value="Champiñones"></option>
        <option value="Champú"></option>
        <option value="Chocolate"></option>
        <option value="Chorizo"></option>
        <option value="Chuletas"></option>
        <option value="Coliflor"></option>
        <option value="Color"></option>
        <option value="Comino"></option>
        <option value="Crema de leche"></option>

        <option value="Crema de manos "></option>
        <option value="Desodorantes"></option>
        <option value="Frijol "></option>
        <option value="Garbanzos"></option>
        <option value="Habichuelas"></option>
        <option value="Harina de Trigo"></option>
        <option value="Hígado"></option>
        <option value="Huevos"></option>
        <option value="Jabón baño"></option>
        <option value="Jabón en polvo"></option>

        <option value="Jabón liquido"></option>
        <option value="Jamón "></option>
        <option value="Jugo de Naranja"></option>
        <option value="Lechuga"></option>
        <option value="Leche en polvo"></option>
        <option value="Leche liquida"></option>
        <option value="Lentejas"></option>
        <option value="Limón"></option>
        <option value="Lulo"></option>
        <option value="Maíz"></option>
        <option value="Mangos"></option>
        <option value="Mantequilla "></option>

        <option value="Manzanas"></option>
        <option value="Maracuyá"></option>
        <option value="Mayonesa"></option>
        <option value="Mazorcas"></option>
        <option value="Melón"></option>
        <option value="Naranjas"></option>
        <option value="Orégano"></option>
        <option value="Panela"></option>
        <option value="Pan"></option>
        <option value="Papa criolla"></option>
        <option value="Papa pastusa"></option>

        <option value="Papaya"></option>
        <option value="Papel higiénico"></option>
        <option value="Pasta dental"></option>
        <option value="Peras"></option>
        <option value="Cilantro"></option>
        <option value="Piña"></option>
        <option value="Plátanos verdes"></option>
        <option value="pollo"></option>
        <option value="Queso "></option>
        <option value="Remolachas"></option>

        <option value="Repollo"></option>
        <option value="Sal"></option>
        <option value="Salchichas"></option>
        <option value="Salchichón"></option>
        <option value="Salmón"></option>
        <option value="Salsa de Tomate"></option>
        <option value="Salsa Soya"></option>
        <option value="Sandía"></option>
        <option value="Soperas"></option>
        <option value="Tilapia"></option>

        <option value="Tocineta"></option>
        <option value="Tocino"></option>
        <option value="Tomate de árbol"></option>
        <option value="Tomate de aliño"></option>
        <option value="Trucha"></option>
        <option value="Uvas"></option>
        <option value="Yuca "></option>
        <option value="Zanahorias"></option>
      </datalist>
    </>
  );
}
