import {IDetalle} from './detalle';
import {Link} from 'react-router-dom'
import React from 'react';


export const DetalleLista: React.FC<IDetalle> = (props : IDetalle) => {

    return(
        <div>
            <Link to={`detalle/${props.id}`}>
                <img src={require(`../assets/images/${props.imagen}`).default} alt={props.instrumento} />
            </Link>
            <span>
                <p>{props.instrumento}</p>
                <p>{props.precio}</p>
                <p>{props.costoEnvio === 'G' ? 'Envio gratis a todo el pais' : `Costo envio $ARS ${props.costoEnvio}`}</p>
                <p>{props.cantidadVendida}</p>
            </span>
        </div>
    );
}
