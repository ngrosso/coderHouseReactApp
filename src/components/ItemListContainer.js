import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const productosIniciales = [{
  id: 1,
  title: "Producto 1",
  price: 100,
  pictureURL: "images/sample-1.jpg"
},
{
  id: 2,
  title: "Producto 2",
  price: 200,
  pictureURL: "images/sample-2.jpg"
},
{
  id: 3,
  title: "Producto 3",
  price: 300,
  pictureURL: "images/sample-3.jpg"
}];

const ItemListContainer = ({ greeting }) => {

  let [productos, setProductos] = useState([]);

  useEffect(() => {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productosIniciales);
      }, 2000);
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
      ({productos}!=[])?<ItemList productos={productos} />:<p>Cargando...</p>
    </div>
  )
}

export default ItemListContainer;