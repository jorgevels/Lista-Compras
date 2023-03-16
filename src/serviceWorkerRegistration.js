import { Workbox } from "workbox-window";
import Swal from "sweetalert2";

export default function registerServiceWorker() {
  if ("production" !== process.env.NODE_ENV) {
    return;
  }
  // Check if the serviceWorker Object exists in the navigator object ( means if browser supports SW )
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");

    wb.addEventListener("installed", (event) => {
      /**
       * We have the condition - event.isUpdate because we don't want to show
       * this message on the very first service worker installation,
       * only on the updated
       */
      if (event.isUpdate) {
        /* if (
          confirm(
            `Hay una nueva actualización!. Haz clic en Aceptar para actualizar`
          )
        ) {
          window.location.reload();
        } */

        /* Swal.fire({
          title: "Hay una nueva actualización!",
          icon: "question",
          iconHtml: "؟",
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
          showCloseButton: true,
        }); */
        Swal.fire({
          title: "Actualización",
          text: "Hemos mejorado algunas cosas para ti ",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Aceptar",
          footer: "Tenemos nuevas promosiones",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
            Swal.fire("Actualizacion!", "App Actualizada.", "success");
          }
        });
      }
    });
    wb.register();
  }
}
