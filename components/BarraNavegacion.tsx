import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BarraNavegacion extends Component{

    render(){
        return <nav className="nav bg-dark justify-content-center">
            <Link className="nav-link text-light" to="/">
                <img width="30vw" src={require('@img/Guitar.svg').default} />
                Hendrix
            </Link>
            <Link className="nav-link text-light" to="/mapa">Donde Estamos</Link>
            <Link className="nav-link text-light" to="/instrumentos">Productos</Link>
        </nav>
    }
}