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
          <th>Total por Producto</th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((producto) => {
          return (
            <tr>
              <td>{producto.item.title}</td>
              <td>{producto.cantidad}</td>
              <td>$ {producto.item.price}</td>
              <td>$ {producto.cantidad * producto.item.price}</td>
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
    <button className="waves-effect waves-light btn red" onClick={clear}>Vaciar carrito</button>
  </>)
}

export default Cart;