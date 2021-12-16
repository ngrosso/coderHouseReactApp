const Item = ({ id, title, price, pictureURL }) => {

  console.log("id del producto: "+id)
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src={pictureURL} alt=""/>
            <span class="card-title">{title}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;