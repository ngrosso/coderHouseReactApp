import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {

  let [contador, setContador] = useState(initial);
  let [mostrar, setMostrar] = useState(false);

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
    setMostrar(true);
  }

  return (
    <div >
      <div >
        <p>Cantidad: {contador} (disponible: {stock})</p>
      </div>
      <div className="container" >
      <button className="waves-effect waves-light btn" onClick={restar}><i className="material-icons">remove</i></button>
      <button className="waves-effect waves-light btn red" onClick={agregarItem}>Añadir al carrito</button>
      <button className="waves-effect waves-light btn" onClick={sumar}><i className="material-icons">add</i></button>
      </div>
      {mostrar ? (
      <div>
        <Link to="/carrito">
          <button type="submit" className="waves-effect waves-light btn green">Finalizar compra</button>
        </Link>
      </div>
      ) : <></>}
    </div>
  );
}

export default ItemCount;