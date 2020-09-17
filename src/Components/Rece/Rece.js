import React, { useContext, useState } from 'react'
import { ModalContext } from '../Context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import './Rece.css';




function getModalStyle() {
    const top = 50;
    const left = 46;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



const Rece = ({ rece }) => {

    // Configuración del modal de material ui
    const [modalStyle] = useState(getModalStyle);

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    // Extraer los valores del context

    const { receta, guardarIdReceta, guardarReceta } = useContext(ModalContext);

    // Muestra y formatea los ingredientes

    const mostrarIngredientes = receta => {
        let ingredientes = [];
        for (let i = 1; 1 < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }




    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{rece.strDrink}</h2>

                <img className="card-img-top" src={rece.strDrinkThumb} alt={`Imágen de 
                ${rece.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(rece.idDrink)
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{receta.strDrink}</h2>
                            <h3 className="mt-5">Instrucciones</h3>
                            <p>{receta.strInstructions}</p>
                            <img className="img-fluid my-4" src={receta.strDrinkThumb} />
                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {mostrarIngredientes(receta)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Rece;
