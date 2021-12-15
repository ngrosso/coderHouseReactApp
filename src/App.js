import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
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
/*
const products = [
  {
    name: "Producto 1",
    price: 10.50,
    stock: 10
  },
  {
    name: "Producto 2",
    price: 20.50,
    stock: 40
  },
  {
    name: "Producto 3",
    price: 30.50,
    stock: 20
  },
  {
    name: "Producto 4",
    price: 40.50,
    stock: 13
  }
];*/

const greeting = "Hola Landing Page";

function App() {

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (<>
    <NavBar menu={menu} />
    <ItemListContainer greeting={greeting} />

  </>
  );
}

export default App;
