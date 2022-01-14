import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import M from "materialize-css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CustomProvider from "./context/CarritoContext";

const menu = [
  {
    name: "Productos",
    path: "/productos",
    id: 0
  },
  {
    name: "Electronica",
    path: "/categoria/1",
    id: 1
  },
  {
    name: "Maquillaje",
    path: "/categoria/2",
    id: 2
  }
]

const greeting = "Hola Landing Page";

function App() {

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
    <CustomProvider>
      <BrowserRouter>
        <NavBar menu={menu} />
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={greeting} />} />
            <Route path="/productos" element={<ItemListContainer greeting={greeting} />} />
            <Route path="/categoria/:id" element={<ItemListContainer greeting={greeting} />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CustomProvider>

  );
}

export default App;
