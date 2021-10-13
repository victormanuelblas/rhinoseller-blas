import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
//--componentes
import ItemDetail from './ItemDetail';
//--css
import './ItemDetail.js';
//Data
import item_data from './Products.json'

const ItemDetailContainer = () => {
    const [item_selected, setitem_selected] = useState([]);

    let { itemId } = useParams();

    const data_content = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(item_data.filter(item => item.id === itemId));
            },2000)
        })
    }
    
    const getItem = async () => {
        return await data_content()
    }

    useEffect(() => {
        
        getItem()
        .then((res) =>{
            setitem_selected(res)
        })
        .catch((err) => {
            console.log('Ooops: ',err)
        })
    }, [itemId])
    
    //console.log('us',item_selected);

    return (
        
        <div className="row">
            {
                item_selected.map(item =>
                    <ItemDetail key={item.id} item={item}/>    
                )
            }
        </div>
    )
}

export default ItemDetailContainer
