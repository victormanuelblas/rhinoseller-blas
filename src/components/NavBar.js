import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'

import CartWidget from "./CartWidget";

import { ItemsContext } from './CartContext'

function NavBar() {

    const { items } = useContext(ItemsContext);

    function getItemsQnty () {

        let rslt = items.reduce((totl,elmn) => (typeof(elmn.qnty) == "number" ? totl + elmn.qnty : totl),0);

        return rslt
    }

    console.log()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">RHINOSELLER</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/category/aplicaciones" id="navbarDropdown" role="button" aria-expanded="false">
                                Aplicaciones
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/category/asesoria" id="navbarDropdown" role="button" aria-expanded="false">
                                Asesoría
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {
                            (getItemsQnty() > 0 ? <CartWidget itms={getItemsQnty()} /> : "")
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;