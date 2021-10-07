import React from 'react';
import { Link } from 'react-router-dom'
//--Css
import './Item.css';

function Item ({item}){
    
    const {id, title, description, price, pictureUrl, category} = item;
    console.log('recibiendo',item);
    return (
        <div className="col-12 col-md-3">
            <div className="item_detail">
                <div className="row">
                    <div className="col-12">
                        <h6>{title}</h6>
                        <h5>Sku: {id}</h5>
                    </div>
                </div>
                <div className="row c-flex">
                    <div className="col-12">
                        <img src={pictureUrl} alt="Rhinoseller" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <b>{description}</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <strong>Precio: <span>{price}</span></strong>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex">
                        <Link to={`/item/${id}`}>Ver detalle del producto</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex">
                        <i>{category}</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;