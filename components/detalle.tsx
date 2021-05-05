import React, { Component } from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';


export interface Detalle {
    id: string
    instrumento: string
    marca: string
    modelo: string
    imagen: string
    precio: string
    costoEnvio: string
    cantidadVendida: string
    descripcion: string
    history: History
}

export default class Instrumento extends Component<any, Detalle>{

    constructor(props: Detalle) {
        super(props)
        this.state = this.props.history.location.state;
    }

    render() {
        return <div className="row d-flex-column my-2">
            <div className="col d-flex flex-column">
                <img className="img-responsive imgDetalle mx-auto" src={require(`@img/${this.state.imagen}`).default} />
                <div className="descripcion mt-3">
                    <p>Descripción: </p>
                    <p>{this.state.descripcion}</p>
                </div>
            </div>
            <div className="col d-flex flex-row">
                <div className="align-self-start">
                    <p className="vendidos">{`${this.state.cantidadVendida} vendidos`}</p>
                    <p className="nombre w-50"><b>{this.state.instrumento}</b></p>
                    <p className="precio">$ {Intl.NumberFormat('de-DE').format(Number(this.state.precio))}</p>
                    <div className="marcaModelo my-5">
                        <p>{`Marca: ${this.state.marca}`}</p>
                        <p>{`Modelo: ${this.state.modelo}`}</p>
                    </div>
                    <div className={this.state.costoEnvio === 'G' ? 'envioGratis d-flex' : 'envioPago'}>
                        {this.state.costoEnvio === 'G' ? (<img src={require('@img/camion.png').default} />) : ('')}
                        <p>
                            {this.state.costoEnvio === 'G' ? 'Envió gratis a todo el país' : `Costo de Envío Interior de Argentina $${Intl.NumberFormat('de-DE').format(Number(this.state.costoEnvio))}`}
                        </p>
                    </div>
                </div>
                <div className="align-self-end w-50 justify-content-start position-absolute">
                    <Link to="/instrumentos" className="btn btn-outline-primary">Agregar al carrito</Link>
                </div>
            </div>
        </div>
    }
}