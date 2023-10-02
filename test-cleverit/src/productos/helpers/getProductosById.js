import { productos } from "../../assets/data/DataProd"

export const getProductosById = ( id ) => {  
    console.log('>>>>'+id); 
    console.log(productos.find(producto => producto.id == id));
    console.log(productos);
    return productos.find(producto => producto.id == id);   
}