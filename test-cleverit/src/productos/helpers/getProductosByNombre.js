import { productos } from "../../assets/data/DataProd"

export const getProductosByNombre = ( name = '') => {
    name = name.toLocaleLowerCase().trim();
    if (name.length === 0) return [];
    return productos.filter(
        producto => producto.nombre.toLocaleLowerCase().trim().includes(name));
}

