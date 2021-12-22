import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ producto }) => {


  let [productoDetalle, setProductoDetalle] = useState(null)


  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(producto)
      }, 2000)
    })

    promise
      .then((producto) => {
        setProductoDetalle(producto)
      })
      .catch(() => {
      })
  }, [])

  return (
    <>
    {productoDetalle!==[]?( <ItemDetail producto={productoDetalle}/>):(<p>Cargando...</p>)}
    </>
  )
}

export default ItemDetailContainer;