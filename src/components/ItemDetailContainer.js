import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
//--componentes
import ItemDetail from './ItemDetail';
//--css
import './ItemDetail.js';
//Data
import item_data from './Products.json'
//Firebase
import db from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

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
        //return await data_content()
        const itemDocmRefr = doc(db,"products", itemId);
        const itemSnap = await getDoc(itemDocmRefr);
        const itemData = itemSnap.data();
        itemData.id = itemId;

        return [itemData];
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
    
    //console.log('item selected',item_selected);

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
