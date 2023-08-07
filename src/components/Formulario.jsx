import { useState } from 'react';
import useClima from "../hooks/useClima";
import paises from "./Paises"; // Importa la lista de países desde el archivo paises.js

const Formulario = () => {
    const [alerta, setAlerta] = useState('');
    const { busqueda, datosBusqueda, consultarClima } = useClima();
    const { ciudad, pais } = busqueda;

    const handleSubmit = e => {
        e.preventDefault();

        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return;
        }
        setAlerta('');
        consultarClima(busqueda);
    }

    return (
        <div className="contenedor">
            {alerta && <p>{alerta}</p>}

            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select
                        id="pais"
                        name="pais"
                        onChange={datosBusqueda}
                        value={pais}
                    >   
                        <option value="">Seleccione un país</option>
                        {paises.map(pais => (
                            <option key={pais.codigo} value={pais.codigo}>
                                {pais.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <input
                    type="submit"
                    value='Consultar Clima'
                />
            </form>
        </div>
    );
}

export default Formulario;