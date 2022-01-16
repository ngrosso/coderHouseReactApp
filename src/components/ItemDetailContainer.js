import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ItemDetailContainer = () => {

  const { id } = useParams()

  let [productoDetalle, setProductoDetalle] = useState(null)

  useEffect(() => {

    const q = query(collection(db, "productos"), where("id", "==", Number(id)));
    getDocs(q).then((snapshot) => {
      setProductoDetalle(snapshot.docs[0].data())
    })
  }, [id]);

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