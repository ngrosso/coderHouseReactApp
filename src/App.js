import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { useEffect } from "react";
import M from "materialize-css";

const menu = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Productos",
    path: "#",
  }
]

const greeting = "Hola Landing Page";

function App() {

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (<>
    <NavBar menu={menu} />
    <ItemListContainer greeting={greeting} />
    <ItemDetailContainer />

  </>
  );
}

export default App;
