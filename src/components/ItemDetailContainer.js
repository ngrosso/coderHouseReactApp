import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

/*const productoInicial = {
  id: 1,
  title: "Producto 1",
  price: 100,
  descripcion: "Descripción del producto 1",
  pictureURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}*/


const apiURL = "https://my-json-server.typicode.com/ngrosso/ecommerce-grosso/productos"



const ItemDetailContainer = () => {

  const {id}  = useParams()

  let [productoDetalle, setProductoDetalle] = useState(null)

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        setProductoDetalle(response.find(producto => producto.id == id))
      })
      .catch(error => {
        console.error(error)
      })
    },[]);

    const getItem = () => {
      return id;
    }

  return (
    <>
      {productoDetalle !== null ? (<ItemDetail producto={productoDetalle} getItem={getItem} />) : (<p>Cargando...</p>)}
    </>
  )
}

export default ItemDetailContainer;