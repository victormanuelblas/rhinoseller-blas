import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
//--components
import ItemCount from './ItemCount';
//--Css
import './ItemDetail.css';
//--context
import { ItemsContext } from './CartContext';

const ItemDetail = ({item}) => {

    //console.log('Recibe item detail', item);

    const {title, description, price, pictureUrl, stock} = item

    const [ goToCart, setGoToCart ] = useState(false);

    const { addItem } = useContext(ItemsContext);

    const onAdd = (qnty) => {

        addItem(item, qnty)

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
                                    <Link to="/cart" className="gotocart">Terminar mi compra</Link>
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
