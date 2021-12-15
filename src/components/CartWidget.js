import { useState } from "react";
const CartWidget = () => {


  const [items, setItems] = useState(0);

  const sumar = () => {
    setItems(items + 1);
  }


  return (
    <a onClick={sumar} className="custom-link">
      <i className="material-icons custom-shopping-cart">shopping_cart</i>
      <span className="medium new badge red custom-shopping-cart-badge" data-badge-caption="">
        {items > 9 ? "9+" : items}
      </span>
    </a>
  )
};

export default CartWidget;