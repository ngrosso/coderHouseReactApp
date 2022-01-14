import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const apiURL = "https://my-json-server.typicode.com/ngrosso/ecommerce-grosso/productos"

const ItemListContainer = ({ greeting }) => {

  let [productos, setProductos] = useState([]);

  const { id } = useParams();
  
  useEffect(() => {

    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (id) {

          //se hace un filtro de tu lista de productos y se busca la categoria del item que coincida con la categoria que se declara desde el param (si es crema, va a buscar todos los productos que tengan categoria crema => la categoria debes declararla en la lista de productos)

          const filtro = response.filter(
            (item) => item.categoria === Number(id)
          );

          //Una vez que tenemos ese filtro, se guarda en un state
          setProductos(filtro);
        } else {
          //En caso de que no haya productos que coincidan con la categoria (o sea que se quiere ver todos los productos se recupera directamente todos los productos => esta seria la opcion de cuando tocamos en productos)
          setProductos(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    //Por ultimo, hacemos que varie de acuerdo al id seleccionado, es decir, si selecciona otra categoria, se vuelven a renderizar los productos

  }, [id]);

  return (
    <div className="container">
      <p>
        {greeting}
      </p>
      {productos !== [] ? (<ItemList productos={productos} />) : (<p>Cargando...</p>)}
    </div>
  )
}

export default ItemListContainer;