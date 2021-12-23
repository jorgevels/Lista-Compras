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
        Swal.fire(
          "Hay una nueva actualización!",
          "Haz clic en Ok para actualizar la App",
          "question"
        );
        {
          window.location.reload();
        }
      }
    });
    wb.register();
  }
}
