import React from "react"
import { Link, RouteComponentProps } from "react-router-dom"

export const NavBar: React.FC = () => {

    return <div>
        <Link to="/home">HOME</Link>
        <Link to="/donde">DONDE ESTAMOS</Link>
        <Link to="/">PRODUCTOS</Link >
    </div>

}