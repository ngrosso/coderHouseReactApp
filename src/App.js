import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
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
  }
]

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (<>
    <NavBar menu={menu}/>
    <ItemListContainer/>
  </>
  );
}

export default App;
