import React from 'react'
//--Componentes
import Item from './Item'
//--Css
import './ItemList.css';

function ItemList({item_list}) {

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