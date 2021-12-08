import NavBar from "./components/NavBar";
import { useEffect } from "react";
import M from "materialize-css";

const menu = [
  {
    name: "Home",
    path: "#"
  },
  {
    name: "Productos",
    path: "#"
  },
  {
    name: "Carrito",
    path: "#"
  }
]

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (<>
    <NavBar menu={menu}/>
  </>
  );
}

export default App;
