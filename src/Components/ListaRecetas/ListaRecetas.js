import React, { useContext } from 'react'
import { RecetasContext } from '../Context/RecetasContext';
import Rece from '../Rece/Rece';


const ListaRecetas = () => {

    // Extraer las recetas 
    const { receta } = useContext(RecetasContext);


    return (
        <div className="row mt-5">
            {receta.map(rece => (
                <Rece
                    key={rece.idDrink}
                    rece={rece}
                />
            ))}
        </div>
    )
}

export default ListaRecetas;
