import React from 'react'

//Componentes
import ItemList from './ItemList';
import "./ItemListContainer.css";

function ItemListContainer(){
    
    return (
        <div className="items_main">
            <div>
                <h3>APLICACIONES</h3>
            </div>
            <div>
                <div className="row">
                    <ItemList />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;