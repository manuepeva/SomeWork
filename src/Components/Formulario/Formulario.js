import React, { useContext, useState, Fragment } from "react";
import { CategoriasContext } from "../Context/CategoriasContext";
import { RecetasContext } from "../Context/RecetasContext";
import Option from "../Option/Option";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);

  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

  const [error, guardarError] = useState(false);

  const { receta } = useContext(RecetasContext);

  // Funcion para leer los contenidos

  const obtenerDatos = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // if (receta === undefined) {
  //     guardarError(true);
  // }

  return (
    <Fragment>
      {/* {error ? <p className="alert alert-danger">Llene todos los campos</p> : guardarError(false)} */}
      <form
        className="col-12"
        onSubmit={(e) => {
          e.preventDefault();
          buscarRecetas(busqueda);
          guardarConsultar(true);
        }}
      >
        <fieldset className="text-center">
          <legend>Busca Bebidas por Categoría o Ingrediente</legend>
        </fieldset>
        <div className="row mt-4">
          <div className="col-md-4">
            <input
              name="nombre"
              className="form-control"
              type="text"
              placeholder="Buscar por Ingrediente"
              onChange={obtenerDatos}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control"
              name="categoria"
              onChange={obtenerDatos}
            >
              <option value="">-- Selecciona Categoría--</option>
              {categorias.map((categoria) => (
                <Option categoria={categoria} key={categoria.strCategory} />
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              value="Buscar Bebidas"
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
