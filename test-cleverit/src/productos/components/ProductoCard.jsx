import { Link } from "react-router-dom";
import { ModalCompra } from "../../ui";
export const ProductoCard = ({
    id,
    nombre,
    precio,
    autor,
    img, 
}) => {
    const prodURL = `/assets/products/${img}`;
  return (
    <>
    <div className="card">
        <img src={prodURL} className="card-img-top" alt={nombre} />
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Autor: {autor} </li>
            <li className="list-group-item">Valor: ${precio}
            <button className=" px-5 btn btn-outline-success"
           type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            >
            Comprar
            </button>
            </li> 
        </ul>
        <Link to={`/detalle/${ id }`}>
        Más información 
        </Link>


    </div>

    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Quieres agregar al carrito.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Agregar</button>
      </div>
    </div>
  </div>
</div>
<div id="liveAlertPlaceholder"></div>

                </>
  )
}


