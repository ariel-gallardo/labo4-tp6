import { Component } from "react";

export default class Index extends Component{
    render(){
        return <div className="container d-flex flex-column my-5 d-flex">
            <img className="align-self-center" width="200vw" src={require('@img/Guitar.svg').default} />
            <h1 className="logoHendrix text-center">Musical Hendrix</h1>
            <p className="text-center my-5 quienes">
                Es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
                conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.
            </p>
        </div>
    }
}