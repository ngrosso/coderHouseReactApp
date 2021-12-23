import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({ producto }) => {

  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src={producto.pictureURL} alt="" />
            <span class="card-title">{producto.title}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p>{producto.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;