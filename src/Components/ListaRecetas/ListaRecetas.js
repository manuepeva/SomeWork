import React, { useContext, useState } from 'react'
import { RecetasContext } from '../Context/RecetasContext';
import Rece from '../Rece/Rece';



const ListaRecetas = () => {


    // Extraer las recetas 
    const { receta } = useContext(RecetasContext);

    // guardarError(false);



    return (

        < div className="row mt-5" >
            {
                receta.map(rece => (
                    <Rece
                        key={rece.idDrink}
                        rece={rece}
                    />
                ))
            }
        </div >
    )
}

export default ListaRecetas;
