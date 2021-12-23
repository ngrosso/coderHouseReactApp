const ItemDetail = ({ producto, getItem }) => {

  getItem();

  if (producto !== null) {
    return (<>
      <h2>{producto.title}</h2>
      <p>{producto.descripcion}</p>
      <p>{producto.price}</p>
    </>
    )
  } else {
    return null;
  }
}

export default ItemDetail;