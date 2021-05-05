import {Detalle} from '@componente/detalle'
import { Component } from 'react';

export default class Instrumento extends Component<Detalle>{

    redirigir(){
        return this.props.history.push({
            pathname: `/instrumentos/detalle`,
            state : {
                instrumento : this.props.instrumento,
                marca : this.props.marca,
                modelo : this.props.modelo,
                imagen : this.props.imagen,
                precio : this.props.precio,
                costoEnvio : this.props.costoEnvio,
                cantidadVendida : this.props.cantidadVendida,
                descripcion : this.props.descripcion,
            }
        });
    }

    constructor(props: Detalle) {
        super(props)
    }

    render(){
        return <li className="d-flex list-group-item bg-transparent detalle">
            <img className="img-responsive mr-3" src={require(`@img/${this.props.imagen}`).default} onClick={() => { this.redirigir()}} />
            <ul className="list-unstyled">
                <li className="nombre">{this.props.instrumento}</li>
                <li className="precio">$ {Intl.NumberFormat('de-DE').format(Number(this.props.precio))}</li>
                <li className={this.props.costoEnvio === 'G' ? 'envioGratis d-flex' : 'envioPago'}>
                    {this.props.costoEnvio === 'G' ? (<img src={require('@img/camion.png').default}/>) : ('')}
                    <p>
                        {this.props.costoEnvio === 'G' ? 'Envió gratis a todo el país' : `Costo de Envío Interior de Argentina $${Intl.NumberFormat('de-DE').format(Number(this.props.costoEnvio))}`}
                    </p>
                </li>
                <li className="vendidos">{this.props.cantidadVendida} vendidos</li>
            </ul>
        </li>
    }
}