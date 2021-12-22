const ItemDetail = ({ producto }) => {

  if (producto !== null) {
    return (<>
      <p>{producto.descripcion}</p>
    </>
    )
  } else {
    return null;
  }
}

export default ItemDetail;