// 1) Necesitamos la variable React en scope
//import React from "react";
// 2) Necesitamos la variable ReactDOM en scope
import reactDOM from "react-dom";
// 3) Necesitamos una aplicación de react
import App from "./App";
// 4) Necesitamos dibujar la aplicacion en el DOM
reactDOM.render(<App/>,document.getElementById("root"));