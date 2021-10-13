import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//--components
import ItemCount from './ItemCount';
//--Css
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    const {id, title, description, price, pictureUrl, stock} = item
//console.log('Recibiendo', item)
    const [ goToCart, setGoToCart ] = useState(false);

    const onAdd = (qnty) => {
        console.log('cargando el onAdd');
        setGoToCart(true);
    }
    
    return (
        <div className="col-12 detail_content">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={pictureUrl} alt="Rhinoseller"/>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <h3>{title}</h3>
                            <strong>Precio: <span>{price}</span></strong>
                            <h6>{description}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {
                                goToCart ? (
                                    <Link to="/cart" className="gotocart">Ir a pagar</Link>
                                ) : (
                                    <ItemCount stock={stock} initial="1" onAdd={onAdd} />
                                )
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <b>{stock} unidades disponibles</b>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ItemDetail
