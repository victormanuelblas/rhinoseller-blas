import React, { useEffect, useState } from 'react'
//--Componentes
import Item from './Item'
//--Css
import './ItemList.css';

const item_data = [
    {
        id: "R40BB5000",
        title: "Control de almacén",
        description: "Aplicación de control de almacén para todo tipo de insumos",
        price: "600.00 USD",
        pictureUrl: "https://intl-blog.imgix.net/wp-content/uploads/2019/02/Imonggo-software-punto-de-venta-captura.png?w=500"
    },
    {
        id: "R40BB5100",
        title: "Punto de venta",
        description: "Aplicación de punto de venta para todo tipo de negocio",
        price: "600.00 USD",
        pictureUrl: "https://intl-blog.imgix.net/wp-content/uploads/2019/02/Imonggo-software-punto-de-venta-captura.png?w=500"
    },
    {
        id: "R40BB5200",
        title: "Facturación electrónica",
        description: "Aplicación para el envío de comprobantes electrónicos",
        price: "600.00 USD",
        pictureUrl: "https://intl-blog.imgix.net/wp-content/uploads/2019/02/Imonggo-software-punto-de-venta-captura.png?w=500"
    }
]
const datacontent = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item_data)
        }, 2000)
    })
}

function ItemList() {

    const [item_list, setitem_list] = useState([])

    const set_item_list = async () => {
        const get_items = await datacontent()

        setitem_list(get_items);
    }
    
    useEffect(() => {
        set_item_list()
    }, [])

    return (

        <div className="row">
            {
                item_list.map(item =>
                    <Item item={item}/>
                )
            }
        </div>
    )
}

export default ItemList;