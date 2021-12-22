import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const productosIniciales = [{
  id: 1,
  title: "Producto 1",
  price: 100,
  descripcion: "Descripción del producto 1",
  pictureURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
},
{
  id: 2,
  title: "Producto 2",
  price: 200,
  descripcion: "Descripción del producto 2",
  pictureURL: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
},
{
  id: 3,
  title: "Producto 3",
  price: 300,
  descripcion: "Descripción del producto 3",
  pictureURL: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
}];

const ItemListContainer = ({ greeting }) => {

  let [productos, setProductos] = useState([]);

  useEffect(() => {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productosIniciales);
      }, 1000);
    });

    promise.then(productos => {
      setProductos(productos);
    }).catch(error => {
      console.error(error);
    })
  }, []);

  const onAdd = (numero) => {
    console.log("Añadido al carrito: " + numero);
  }

  return (
    <div className="container">
      <p>
        {greeting}
      </p>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      {productos!==[]?(<ItemList productos={productos} />):(<p>Cargando...</p>)}
    </div>
  )
}

export default ItemListContainer;