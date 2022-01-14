import { useContexto } from "../context/CarritoContext";


const CartWidget = () => {

  const { cantidadTotal } = useContexto();


  return (
    <>
      <i className="material-icons custom-shopping-cart">shopping_cart</i>
      <span className="medium new badge red custom-shopping-cart-badge" data-badge-caption="">
        {cantidadTotal}
      </span>
    </>
  )
};

export default CartWidget;