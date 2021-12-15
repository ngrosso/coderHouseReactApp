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
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Item</span>
            <p>{contador}</p>
          </div>
          <div className="card-action">
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
          </div>
          <button onClick={agregarItem}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;