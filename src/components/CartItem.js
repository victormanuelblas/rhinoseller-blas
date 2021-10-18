import React from 'react'

import './CartItem.css'

const CartItem = ({mode, item, removeItem }) => {

    const deleItem = (itemId, e) => {
        e.preventDefault();
        removeItem(itemId);
    }

    if (mode == "head") {
        return (
            <div className="row cart_item_head">
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-4">
                    <span>{item.title}</span>
                </div>
                <div className="col-12 col-md-1">
                    <span>{item.qnty}</span>
                </div>
                <div className="col-12 col-md-1">
                    <span>{item.price}</span>
                </div>
                <div className="col-12 col-md-1">
                    <span>{item.subtotal}</span>
                </div>
                <div className="col-12 col-md-1"></div>
            </div>
        )
    }
    if (mode == "foot") {
        return (
            <div className="row cart_item_foot">
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-4">
                    <span>{item.title}</span>
                </div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-1">
                    <strong>{item.price}</strong>
                </div>
                <div className="col-12 col-md-1"></div>
            </div>
        )
    }

    return (
        <div className="row cart_item_elmn">
            <div className="col-12 col-md-1">
                <img src={item.pictureUrl} /> 
            </div>
            <div className="col-12 col-md-4">
                <span>{item.title}</span>
                <i>{item.description}</i>
            </div>
            <div className="col-12 col-md-1">
                <b>{item.qnty}</b>
            </div>            
            <div className="col-12 col-md-1">
                <strong>{item.price}</strong>
            </div>
            <div className="col-12 col-md-1">
                <strong>{Intl.NumberFormat("es-PE", { minimumFractionDigits: 2 }).format(item.qnty * item.price)}</strong>
            </div>
            <div className="col-12 col-md-1">
                    <button onClick={(e) => deleItem(item.id, e)}>Eliminar</button>
            </div>

        </div>
    )

}

export default CartItem
