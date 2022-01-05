const ItemDetail = ({ producto, getItem }) => {

  getItem();
  console.info(getItem())

  if (producto !== null) {
    return (<>
      <div clasName="card medium">
        <div class="row">
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src={producto.pictureURL} alt="" />
                <span class="card-title">{producto.title}</span>
              </div>
              <div class="card-content">
                <p>{producto.descripcion}</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  } else {
    return null;
  }
}

export default ItemDetail;