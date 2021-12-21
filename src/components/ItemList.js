import Item from "./Item";

const ItemList = (props) => {
  const { productos } = props;

  if (productos !== []) {
    return (
      <>
        <div>
          {productos.map((producto) => {
            return (
              <Item
                key={producto.id}
                title={producto.title}
                price={producto.price}
                pictureURL={producto.pictureURL}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ItemList;
