import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

  const onAdd = (numero) => {
    console.log("Añadido al carrito: " + numero);
  }

  return (
    <div className="container">
      <p>
        {greeting}
      </p>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer;