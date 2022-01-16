import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = ({ greeting }) => {

  let [productos, setProductos] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    let q = null;
    if (id) {
      q = query(collection(db, "productos"), where("categoria", "==", Number(id)));
    } else {
      q = collection(db, "productos");
    }
    getDocs(q).then((snapshot) => {
      setProductos(snapshot.docs.map(doc => doc.data()))
    })

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