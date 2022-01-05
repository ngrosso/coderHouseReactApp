import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const onAdd = (numero) => {
  console.log("Añadido al carrito: " + numero);
}

const Item = ({ producto }) => {

  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src={producto.pictureURL} alt="" />
            <span class="card-title">{producto.title}</span>
            <Link to={`/producto/${producto.id}`} id={producto.id}>
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </Link>
          </div>
          <div class="card-content">
            <p>$ {producto.price}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;