import { useContexto } from "../context/CarritoContext";

const Cart = () => {

  const { carrito, removeItem, clear } = useContexto();

  console.info(carrito);

  return (<>
    <table className="highlight centered">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((producto) => {
          return (
            <tr>
              <td>{producto.title}</td>
              <td>{producto.cantidad}</td>
              <td>$ {producto.price}</td>
              <td>$ {producto.cantidad * producto.price}</td>
              <td>
                <button onClick={() => { removeItem(producto.id) }}>
                  <i className="material-icons custom-shopping-cart">delete</i>
                </button>
              </td>
            </tr>
          )
        }
        )}
      </tbody>
    </table>
    <button className="waves-effect waves-light btn red" onClick={clear}>Vaciar carrito</button>
  </>)
}

export default Cart;