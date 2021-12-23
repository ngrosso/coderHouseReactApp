import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const productoInicial = {
  id: 1,
  title: "Producto 1",
  price: 100,
  descripcion: "Descripción del producto 1",
  pictureURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}



const ItemDetailContainer = () => {


  let [productoDetalle, setProductoDetalle] = useState(null)

  const getItem = () => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productoInicial)
      }, 2000)
    })

    promise
      .then((producto) => {
        setProductoDetalle(producto)
      })
      .catch(() => {
      })
  }

  return (
    <>
      {productoDetalle !== [] ? (<ItemDetail producto={productoDetalle} getItem={getItem} />) : (<p>Cargando...</p>)}
    </>
  )
}

export default ItemDetailContainer;