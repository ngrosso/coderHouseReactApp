import Item from "./Item";

const ItemList = (props) => {
  const { productos } = props;

  if (productos !== []) {
    return (
      <>
        <div>
          {productos.map((producto) => {
            return (
              <Item producto={producto} />
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
