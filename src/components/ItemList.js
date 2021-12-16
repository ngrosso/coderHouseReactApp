import Item from "./Item";

const ItemList = ({ items }) => {
  
  {items.map(item => {
    return (
      <Item
        id={item.id}
        title={item.title}
        price={item.price}
        pictureURL={item.pictureURL}
      />
    );
  })}
};


export default ItemList;