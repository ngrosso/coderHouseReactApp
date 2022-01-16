import { Link } from "react-router-dom";

const Item = ({ producto }) => {

  return (
    <div className="center">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={producto.pictureURL} alt="" />
            <span className="card-title">{producto.title}</span>
            <Link to={`/producto/${producto.id}`} id={producto.id}>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">info_outline</i>
              </a>
            </Link>
          </div>
          <div className="card-content">
            <p>$ {parseFloat(producto.price).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;