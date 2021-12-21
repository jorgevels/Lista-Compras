import React from "react";
import Swal from "sweetalert2";
import "animate.css";

const index = () => {
  return Swal.fire({
    /*  type: "info", */
    imageUrl:
      "https://res.cloudinary.com/imagesfull/image/upload/v1594676015/like/favicon-Info_pkpykw.ico",

    title: `<div style=" font-size: 20px; z-index:5000000">Mercando</div>`,

    html: `<div style="text-align: left; font-size: 16px"><strong>1.</strong>No más listas de compras en papel.</div>
        <div style="text-align: left; font-size: 16px"><strong>2.</strong>Con esta PWA podras crear tus listas de compras desde tu teléfono.</div>
                   <div style="text-align: left; font-size: 16px"><strong>3.</strong>Con el botón del signo más, podras agregar tus artículos a una lista muy cool.</div>
                   <div style="text-align: left; font-size: 16px"><strong>4.</strong>Puedes seleccionar la cantidad y la unidad que desees.</div>
                   <div style="text-align: left; font-size: 16px"><strong>5.</strong>Puedes editar o eliminar los artículos de la lista.</div>
                   <div style="text-align: left; font-size: 16px"><strong>6.</strong>Al momento de tus compras, en la columna de selección podras ir marcando los productos que ya depositaste en tu carro de compras .</div>
                    <div style="text-align: left; font-size: 16px"><strong>7.</strong>Si no cliqueas el botón de Eliminar, anque cierres la aplicacion tu lista no se borrara.</div>
                   <br>
                   <div style="text-align: right;"><strong>Dev.</strong> Jorge Velasquez 😉</div>
                   `,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export default index;
