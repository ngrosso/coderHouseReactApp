import { useState } from "react";
import Header from "./components/Header";


function App() {


 const [contador,setContador] = useState(0);

 //const [lista,setLista] = useState([]);

 console.log(contador);

  const foo = () => {
    console.log("foo");
  }

  const sumar = () => {
    setContador(contador + 1);

  }

  const restar = () => {
    setContador(contador - 1);
  }

  const resetear = () => {
    setContador(0);
  }

  const links = [
    { href: "#", name: "Home", id: 1 },
    { href: "#", name: "Productos", id: 2 },
    { href: "#", name: "Carrito", id: 3 }
  ];
  return (
    <>
      <Header nombre="Nicolas" edad={1} links={links} foo={foo}>
        <p>Hola</p>
        <p>Hola</p>
      </Header>
      <main>
        <p>This is the main content</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={resetear}>resetear</button>
        <p>Contador Actual: {contador}</p>
      </main>
    </>
  )
}

export default App;