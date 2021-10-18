import React, { useContext } from 'react'
import CartItem from './CartItem';
import { ItemsContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { items, removeItem } = useContext(ItemsContext);

    //console.log('Items desde el context', items);

    let items_amount = Intl.NumberFormat("es-PE", { minimumFractionDigits: 2 }).format(items.reduce((totl, elmn) => totl + (elmn.qnty * parseFloat(elmn.price)), 0));

    const items_head = {
        pictureUrl: "",
        title: "Producto",
        description: "",
        qnty: "Cantidad",
        price: "Prec.Unidad",
        subtotal: "Sub Total"
    }
    const items_foot = {
        pictureUrl: "",
        title: "Total",
        description: "",
        qnty: "",
        price: items_amount,
        subtotal: ""
    }

    function deleItem(itemId) {
        removeItem(itemId);
    }

    return (

        (items.length > 0 ?
            <>
                <CartItem mode="head" item={items_head} />
                {
                    items.map(item =>
                        <CartItem mode="elmn" item={item} removeItem={removeItem} />
                    )
                }
                <CartItem mode="foot" item={items_foot} />
            </>
            :
            <>
                <h5>No hay productos en el carro</h5>
                <Link to="/">Seguir comprando</Link>
            </>
        )

    )
}

export default Cart
