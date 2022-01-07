import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {

  let [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  }

  const agregarItem = () => {
    onAdd(contador);
  }

  return (
    <div >
      <div >
        <p>Cantidad: {contador}</p>
      </div>
      <button className="waves-effect waves-light btn" onClick={restar}><i className="material-icons">remove</i></button>
      <button className="waves-effect waves-light btn red" onClick={agregarItem}>Añadir al carrito</button>
      <button className="waves-effect waves-light btn" onClick={sumar}><i className="material-icons">add</i></button>
    </div>
  );
}

export default ItemCount;