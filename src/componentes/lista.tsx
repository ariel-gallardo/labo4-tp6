import  { Component } from 'react';
import { DetalleLista} from './listadetalle';
import {IDetalle} from './detalle'


import {History} from 'history';
import axios from 'axios';

interface ILista{
    history : History
}


interface ISInstrumentos{
    instrumentos: IDetalle[]
}

export class Lista extends Component<ILista, ISInstrumentos> {

    apiInstrumentos(){
        let data : any;
        axios.get('http://localhost:8080/instrumentos').then(
            d => { 
                data = d.data
                this.setState({ instrumentos: data._embedded.instrumentos })
            }
            
        )
    }


    constructor(props){
        super(props)
        this.state = {
            instrumentos : new Array<IDetalle>()
        }
    }

    componentDidMount(){
        this.apiInstrumentos()
    }

    verDetalle(_id : string){
        return this.props.history.push(`detalle/${_id}`,{ id: _id });
    }


    render(){
        
        return <ul>
                {    
                    this.state.instrumentos.length === 0 ? <h1>Cargando</h1> :
                    this.state.instrumentos.map(
                        (ins, numId) => {
                            return <li key={String(numId + 1)}>
                                <DetalleLista
                                    id={String(numId+1)}
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