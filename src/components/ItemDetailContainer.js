import React, { useState, useEffect } from 'react';
//--componentes
import ItemDetail from './ItemDetail';
//--css
import './ItemDetail.js';

const item_data = [
    {
        id: "R40BB5000",
        title: "Control de almacén",
        description: "Aplicación de control de almacén para todo tipo de insumos",
        price: "600.00 USD",
        pictureUrl: "https://intl-blog.imgix.net/wp-content/uploads/2019/02/Imonggo-software-punto-de-venta-captura.png?w=500",
        stock: "6"
    },
    {
        id: "R40BB5100",
        title: "Punto de venta",
        description: "Aplicación de punto de venta para todo tipo de negocio",
        price: "600.00 USD",
        pictureUrl: "https://intl-blog.imgix.net/wp-content/uploads/2019/02/Imonggo-software-punto-de-venta-captura.png?w=500",
        stock: "4"
    },
    {
        id: "R40BB5200",
        title: "Facturación electrónica",
        description: "Aplicación para el envío de comprobantes electrónicos",
        price: "600.00 USD",
        pictureUrl: "https://intl-blog.imgix.net/wp-content/uploads/2019/02/Imonggo-software-punto-de-venta-captura.png?w=500",
        stock: "2"
    }
]

const data_content = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(item_data.filter(item => item.id == 'R40BB5200'));
        },2000)
    })
}

const ItemDetailContainer = () => {
    const [item_selected, setitem_selected] = useState([]);

    const getItem = async () => {
        return await data_content()
    }

    useEffect(() => {
        //set_item_data()
        getItem()
        .then((res) =>{
            setitem_selected(res)
        })
        .catch((err) => {
            console.log('Ooops: ',err)
        })
    }, [])
    
    //console.log('us',item_selected);

    return (
        
        <div className="row">
            {
                item_selected.map(item =>
                    <ItemDetail  item={item}/>    
                )
            }
        </div>
    )
}

export default ItemDetailContainer
