import React from "react";
import ReactHTMLDatalist from "react-html-datalist";

const ListArticulos = () => {
  return (
    <div>
      <ReactHTMLDatalist
        name={"food_id"}
        onChange={handleChange}
        classNames={"classone classtwo"}
        options={[
          { text: "Pizza", value: "1" },
          { text: "Burger", value: "2" },
          { text: "Sandwich", value: "3" },
          { text: "French Fries", value: "4" },
        ]}
      />

      {/* <datalist id="LisArticulos">
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
      </datalist> */}
    </div>
  );
};

export default ListArticulos;
