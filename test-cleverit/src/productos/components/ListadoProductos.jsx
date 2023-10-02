
import { ProductoCard } from './';
import { getProductosByAutor} from '../helpers';
import { useMemo } from 'react';
export const ListadoProductos = ({autor}) => {
    const productos = useMemo(() => getProductosByAutor(autor), [autor]);
  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
      {productos.map(producto => (
        < ProductoCard
          key = { producto.id }
          { ...producto }
        />
      ))}
    </div>
  )
}

