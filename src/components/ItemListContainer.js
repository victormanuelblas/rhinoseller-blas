import React from 'react'
//Componentes
import ItemCount from './ItemCount';
import "./ItemListContainer.css";

function ItemListContainer(){

    return (
        <div className="items_main">
            <div>
                <h3>APLICACIONES</h3>
            </div>
            <div>
                Aún no tenemos productos
            </div>
            <div>
                <h4>Aquí el componente del contador</h4>
                <div className="row">
                    <ItemCount stock="6" initial="2"/>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;