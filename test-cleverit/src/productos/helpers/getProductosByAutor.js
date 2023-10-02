import  {productos}  from '../../assets/data/DataProd';
export const getProductosByAutor = (autor) => { 

    console.log(autor);

    const validAutors = ['Sandro Botticelli', 'Anton van Dyck', 'Salvador Dalí', 'Leonardo Da Vinci', 'Van Gogh'];  

    if (!validAutors.includes(autor)) {
        if (autor === 'all') {
            return productos.filter(producto => producto.autor != autor);
        }
        throw new Error(`El autor ${ autor } no se encuentra en la lista`);
    } 
    return productos.filter(producto => producto.autor === autor);
}