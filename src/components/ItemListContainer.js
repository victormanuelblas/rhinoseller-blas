import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//Componentes
import ItemList from './ItemList';
import "./ItemListContainer.css";
//Data
import item_data from './Products.json'
//Firebase
import db from '../firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';

function ItemListContainer(){
    const [item_list, setitem_list] = useState([])

    let { categoryId } = useParams();

    const data_content = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (categoryId == undefined) {
                    resolve(item_data);
                } else {
                    resolve(item_data.filter(item => item.category === categoryId));
                }
            },2000)
        })
    }    

    const getItemList = async () => {
        //console.log('3-categ', categoryId)
        //return await data_content();
        const itemsColct = collection(db,'products')
        let itemsSnpSh = []

        if (categoryId != undefined){
            const itemsQuery = query(itemsColct, where("category", "==", categoryId))
            itemsSnpSh = await getDocs(itemsQuery);
        } else {
            itemsSnpSh = await getDocs(itemsColct);
        }

        let itemsList = [];
        let itemListElmn = {}

        itemsSnpSh.forEach((doc) => {
            itemListElmn = doc.data()
            itemListElmn.id = doc.id
            itemsList.push(itemListElmn)
        })

        return itemsList
    }

    useEffect(() => {
        getItemList()
        .then((resp) => {
            setitem_list(resp);
        })
        .catch((err) =>{
            console.log('Oooops: ',err);
        })
    }, [categoryId])  
    
    return (

        <div className="items_main">
            <div>
                <h3>Categoría: {(categoryId != undefined) ? categoryId : 'Todos'}</h3>
            </div>
            <div>
                <div className="row">
                    <ItemList item_list = {item_list} />
                </div>
            </div>
        </div>
    )

}

export default ItemListContainer;