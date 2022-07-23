import React, { useState } from "react";
import Error from "./error";
import shortid from 'shortid';
const Formulario = ({agregarNuevoGasto}) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    const agregarGasto = e =>{
        e.preventDefault();
        
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
 
        agregarNuevoGasto(gasto);
        guardarNombre('');
        guardarCantidad(0);

    }
    return ( 
        <form
           onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto Incorrecto"/> : null}

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input 
                   type="text"
                   className="u-full-width"
                   placeholder="Ej. Transporte"
                   value={nombre}
                   oneChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input 
                   type="number"
                   className="u-full-width"
                   placeholder="Ej. 300"
                   value={cantidad}
                   oneChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;