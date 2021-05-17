import axios from 'axios';
import React, { useState } from 'react';
import { Link, RouteComponentProps, useParams } from 'react-router-dom';

interface IParam{
    id : string
}

export interface IDetalle{
    id?: string
    instrumento: string
    marca: string
    modelo: string
    imagen: string
    precio: string
    costoEnvio: string 
    cantidadVendida: string
    descripcion: string
}

export const Detalle: React.FC<RouteComponentProps> = (props) => {

    let { id } = useParams<IParam>();
    let [detalle, setDetalle] = useState<IDetalle>(null)

    const componentDidMount = () => {
        axios.get<IDetalle>(`http://localhost:8080/instrumentos/${id}`).then(
            data => { setDetalle(data.data) }
        )
    }
    componentDidMount()


    return(
        <div>
            {detalle != null ? <div>
                <span>
                    <img src={require(`../assets/images/${detalle.imagen}`).default} alt={detalle.instrumento} />
                    <div>
                        <p>Descripcion:</p>
                        <p>{detalle.descripcion}</p>
                    </div>
                </span>
                <span>
                    <p>{detalle.cantidadVendida}</p>
                    <p>{detalle.instrumento}</p>
                    <p>{detalle.precio}</p>
                    <p>{detalle.marca}</p>
                    <p>{detalle.modelo}</p>
                    <div>
                        <p>Costo Envío:</p>
                        <p>{detalle.costoEnvio === 'G' ? 'Envio gratis a todo el pais' : `Costo envio $ARS ${detalle.costoEnvio}`}</p>
                    </div>
                    <Link to="">Volver</Link>
                </span>
            </div> : <div><h1>Cargando</h1></div>}
        </div>
    );
}

