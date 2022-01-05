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
          <div >
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
          </div>
          <button onClick={agregarItem}>Añadir al carrito</button>
        </div>
  );
}

export default ItemCount;