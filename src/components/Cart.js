import { Link } from "react-router-dom";
import { useState } from "react";
import { useContexto } from "../context/CarritoContext";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import M from "materialize-css";

const Cart = () => {

  const { carrito, removeItem, clear } = useContexto();

  const [idOrden, setIdOrden] = useState(0);
  const [insertError, setInsertError] = useState("");
  const user = { name: "Nicolas", phone: "123456789", email: "email@domain.com" };

  const totalFinal = carrito
    .map((producto) => producto.item.price * producto.cantidad)
    .reduce((a, b) => a + b, 0);

  const completarCompra = () => {

    document.querySelectorAll('button').forEach(element => {
      element.setAttribute('disabled', 'disabled');
    })

    let arrayItems = [];
    carrito.forEach((producto) => {
      arrayItems.push({
        id: producto.item.id,
        name: producto.item.title,
        price: producto.item.price,
        cantidad: producto.cantidad,
      });
    });
    const order = {
      buyer: user,
      items: arrayItems,
      timestamp: new Date().toISOString(),
      total: totalFinal
    }
    const orderCollection = collection(db, "ordenes");
    addDoc(orderCollection, order)
      .then(({ id }) => setOrderId(id))
      .catch(error => setErrorStatus(error))
    //TODO: No se ejecuta el catch ante un error, necesitaria una validacion del tutor

  }

  const setOrderId = (id) => {
    console.log("Insert Exitoso, el id generado del documento es: " + id);
    setIdOrden(id);
    var modal = document.querySelector('#modalOk');
    var instances = M.Modal.init(modal, { dismissible: false });
    instances.open()
  }

  const setErrorStatus = (error) => {
    console.log(error);
    setInsertError(error);
    var modal = document.querySelector('#modalError');
    var instances = M.Modal.init(modal, { dismissible: false });
    instances.open()
    document.querySelectorAll('button').forEach(element => {
      element.setAttribute('enable', 'enable');
    })
  }

  if (carrito.length > 0) {

    return (<>
      <table className="highlight centered">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Total por Producto</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => {
            return (
              <tr>
                <td>{producto.item.title}</td>
                <td>{producto.cantidad}</td>
                <td>$ {parseFloat(producto.item.price).toFixed(2)}</td>
                <td>$ {parseFloat(producto.cantidad * producto.item.price).toFixed(2)}</td>
                <td>
                  <button onClick={() => { removeItem(producto.item.id) }}>
                    <i className="material-icons custom-shopping-cart">delete</i>
                  </button>
                </td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
      <button className="waves-effect waves-light btn red right" onClick={clear}><i class="material-icons left">remove_shopping_cart</i>Vaciar carrito</button>
      <div className="center">
        <h3>Total Final: $ {parseFloat(totalFinal).toFixed(2)}</h3>
        <button className="waves-effect waves-light btn green" id="completarCompra" onClick={completarCompra}>
          <i class="material-icons left">check</i>Completar Compra</button>
      </div>
      <div id="modalOk" class="modal">
        <div class="modal-content">
          <h4>Su orden ha sido aprobada {user.name}</h4>
          <p>El Id de su orden es: {idOrden}</p>
          <p>Se la notificaremos a su email {user.email} en breve</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat green" onClick={clear}>Aceptar</a>
        </div>
      </div>
      <div id="modalError" class="modal">
        <div class="modal-content">
          <h4>Su orden ha sido rechazada</h4>
          <p>El detalle del error es: {insertError}</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat green">Aceptar</a>
        </div>
      </div>
    </>)
  } else {
    return (<>
      <div className="center">
        <h3>No hay productos en el carrito</h3>
        <span><i className="large material-icons">add_shopping_cart</i></span>
        <div>
          <Link to="/productos">
            <button type="submit" className="waves-effect waves-light btn-large blue">
              <i className="material-icons right">redeem</i>Continuar comprando</button>
          </Link>
        </div>
      </div>
    </>)
  }
}

export default Cart;