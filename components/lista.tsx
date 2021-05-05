import React, { Component } from 'react';
import Instrumento from '@componente/detallelista';
import InstrumentosJSON from '@datos/instrumentos.json';
import Historial from '@componente/historial';
import { useLocation } from 'react-router-dom';

interface IProps{

}

interface IDetalle{
    instrumentos : any[]
}

export default class Instrumentos extends Component<IProps,IDetalle>{

    constructor(props : IProps){
        super(props)
        this.state = {
            instrumentos : InstrumentosJSON.instrumentos
        };
    }

    render(){
        return <div>
            <ul className="list-group-flush">
                { 
                    this.state.instrumentos.map( i =>{
                        let { id, marca, modelo, instrumento, imagen, precio, costoEnvio, cantidadVendida, descripcion } = i; 
                        return <Instrumento key={id}
                            id = {id}
                            marca = {marca}
                            modelo = {modelo}
                            instrumento = {instrumento}
                            imagen = {imagen}
                            precio = {precio}
                            costoEnvio = {costoEnvio}
                            cantidadVendida = {cantidadVendida}
                            descripcion = {descripcion}
                            history={Historial}
                        />
                    })
                }
            </ul>
        </div>
    }
}