import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const apiURL = "https://my-json-server.typicode.com/ngrosso/ecommerce-grosso/productos"

const ItemDetailContainer = () => {

  const {id}  = useParams()

  let [productoDetalle, setProductoDetalle] = useState(null)

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        setProductoDetalle(response.find(producto => producto.id === Number(id)))
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