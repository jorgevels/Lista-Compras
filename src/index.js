import React from "react";
import ReactDOM from "react-dom";
import "@styles/index.css";
import App from "@routes/App";
import registerServiceWorker from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
