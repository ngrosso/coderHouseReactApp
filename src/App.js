import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useEffect } from "react";
import M from "materialize-css";

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
  <BrowserRouter>
  <NavBar menu={menu} />
  <main>
      <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting}/>} />
          <Route path="/productos" element={<ItemListContainer greeting={greeting} />} />         
          <Route path="/categoria/:id" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Routes>
  </main>
</BrowserRouter>
  );
}

export default App;
