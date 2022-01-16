import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const { Provider } = CartContext;

export const useContexto = () => {
  return useContext(CartContext);
}

const CustomProvider = ({ children }) => {

  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  // const addItem = (item, cantidad) => {
  //   if (isInCart(item.id)) {
  //     console.log(isInCart(item.id))
  //     console.log("El producto ya estaba agregado")
  //     //TODO: Sumar solo la cantidad sin superar el stock del item

  //   } else {
  //     const copiaItem = { ...item }
  //     copiaItem.cantidad = cantidad;
  //     setCantidadTotal(cantidadTotal + cantidad)
  //     const copia = [...carrito, copiaItem];
  //     setCarrito(copia);
  //   }
  // }

  const addItem = (item, cantidad) => {
    //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
    const findPorId = carrito.findIndex(
      (listaDeItems) => listaDeItems.item.id === item.id
    );
    console.info("findPorId: " + findPorId);
    //[...carrito] => sirve para que no se pisen los productos
    if (findPorId === -1) {
      const listaDeItems = [
        ...carrito,
        { item: item, cantidad: cantidad },
      ];
      setCarrito(listaDeItems);
      setCantidadTotal(cantidadTotal + 1);
    } else {
      //Si el prod ya esta en el carrito...
      //Hacemos una const que sume la nueva cantidad mas la cantidad que ya estaba 
      const nuevaCantidad = carrito[findPorId].cantidad + cantidad;
      //Filtramos del carrito el producto al cual le tenemos que agregar mas cantidad
      const listaViejaDeItems = carrito.filter(
        (listaViejaDeItems) =>
          listaViejaDeItems.item.id !== carrito[findPorId].item.id
      );
      //Creamos el nuevo carrito
      const listaDeItems = [
        ...listaViejaDeItems,
        {
          item: carrito[findPorId].item,
          //Con un if ternario podrias especificar que nunca se pase del stock que tenes
          cantidad: nuevaCantidad <= item.stock ? nuevaCantidad : item.stock,
        },
      ];
      setCarrito(listaDeItems);
      setCantidadTotal(cantidadTotal);
    }
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter(p => p.item.id !== id));
    setCantidadTotal(cantidadTotal > 0 ? cantidadTotal - 1 : 0)
  }

  const clear = () => {
    setCarrito([]);
    setCantidadTotal(0);
  }

  const valorDelContexto = {
    cantidadTotal,
    carrito,
    addItem,
    removeItem,
    clear
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CustomProvider;