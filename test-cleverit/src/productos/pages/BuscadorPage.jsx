import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { ProductoCard } from "../components";
import { getProductosByNombre } from "../helpers";
export const BuscadorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  const productos = getProductosByNombre(q)
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && productos.length === 0;
  const { SearchText, onInputChange } = useForm({
    SearchText: q
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if(SearchText.trim().length <=2) return;
    navigate(`?q=${SearchText}`);
  };
  return (
    <>
      <h1>Buscador</h1>
      <hr />
      <div className="row">
        <div className=" col-12">
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Buscar por producto"
              className="form-control col-7"
              name="SearchText"
              autoComplete="off"  
              value={SearchText}
              onChange= {onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1col-3">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
          <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>Buscar por nombre de la obra</div>
          <div className="alert alert-danger" style={{display: showError ? '': 'none'}}>No tenemos resultados para { q } </div>
          {
            productos.map((producto) => (
              <ProductoCard key={producto.id} {...producto} />
            ))
          }
        </div>
      </div>
    </>
  )
}

