import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JSONInstrumento from '../json/instrumentos.json'
import { DetalleLista} from './listadetalle';

import {History} from 'history';

interface ILista{
    history : History
}

export class Lista extends Component<ILista> {

    verDetalle(_id : string){
        return this.props.history.push(`detalle/${_id}`,{ id: _id });
    }


    render(){
        
        return <ul>
                {
                    JSONInstrumento.instrumentos.map(
                        ins => {
                            return <li key={ins.id}>

                                <DetalleLista key={ins.id}
                                    id={ins.id}
                                    instrumento={ins.instrumento}
                                    marca={ins.marca}
                                    modelo={ins.modelo}
                                    imagen={ins.imagen}
                                    precio={ins.precio}
                                    costoEnvio={ins.costoEnvio}
                                    cantidadVendida={ins.cantidadVendida}
                                    descripcion={ins.descripcion}
                                />

                            </li>
                        }
                    )
                }
            
        </ul>
    }
}