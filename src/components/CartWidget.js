import React from "react";
import { Link } from 'react-router-dom';
import "./CartWidget.css";
import CartIcon from "../resources/ecmm-cart-icon.png";

function CartWidget (props) {
    
    return (
        <div className="cart_content">
            <div className="row">
                <div className="col-6">
                <img src={CartIcon} alt="rhinoseller" />
                </div>
                <div className="col-6 cart_content_itms">
                    {
                        (props.itms > 0 ? <Link to="/cart">{props.itms}</Link> : <span>{props.itms}</span>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CartWidget;