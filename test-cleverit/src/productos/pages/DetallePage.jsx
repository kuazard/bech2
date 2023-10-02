import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProductosById } from "../helpers";
import { useMemo } from "react";

export const DetallePage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const producto = useMemo ( () => getProductosById(id), [id] );

  const onNavigateBack = () => {
    navigate(-1);
  }


  if(!producto){
    return <Navigate to="/home" />;
  }
  return (
    <div className=" container row mt-5 ">
      <div className="col-7">
        <img 
          src={`/assets/products/${producto.img}`} 
          alt="" 
          className="img-thumbnail  d-block" />
      </div>
      <div className="col-7">
        <h3>{producto.nombre} 
        <hr/>
        </h3> 
        <h4> {producto.autor} {producto.fecha} {producto.tecnica}</h4> 
        <hr/>
        <h4>{producto.descripcion}</h4> 
        <hr />
        <h4>Ubicacion: {producto.ubicacion}</h4>
        <br />
        <br />
        <button className=" col-12 mx-2 mb-5 btn btn-outline-primary"
          onClick={ onNavigateBack }>
          Regresar
        </button>
        
      </div>
      
    </div>
  )
}


