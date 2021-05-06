import React, { Component } from 'react';
import { Link, RouteComponentProps, useParams } from 'react-router-dom';
import InstrumentosJSON from '../json/instrumentos.json'
import { History } from 'history';

export interface IDetalle{
    id: string
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

    let {id} = useParams<IDetalle>();

    let tempInstrumento: IDetalle;

    InstrumentosJSON.instrumentos.filter(
        instrumento => {
            if (instrumento.id == id){
                tempInstrumento = {...instrumento}
            }
        }
    );

    return(
        <div>
            <span>
                <img src={require(`../assets/images/${tempInstrumento.imagen}`).default}/>
                <div>
                    <p>Descripcion:</p>
                    <p>{tempInstrumento.descripcion}</p>
                </div>
            </span>
            <span>
                <p>{tempInstrumento.cantidadVendida}</p>
                <p>{tempInstrumento.instrumento}</p>
                <p>{tempInstrumento.precio}</p>
                <p>{tempInstrumento.marca}</p>
                <p>{tempInstrumento.modelo}</p>
                <div>
                    <p>Costo Envío:</p>
                    <p>{tempInstrumento.costoEnvio == 'G' ? 'Envio gratis a todo el pais' : `Costo envio $ARS ${tempInstrumento.costoEnvio}`}</p>
                </div>
                <Link to="">Volver</Link>
            </span>
        </div>
    );
}

