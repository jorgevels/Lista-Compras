import { Workbox } from "workbox-window";

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
        if (
          confirm(
            `Hay una nueva actualización!. Haz clic en Aceptar para actualizar`
          )
        ) {
          window.location.reload();
        }
      }
    });
    wb.register();
  }
}
