import React, { createContext, useState } from 'react'

export const ItemsContext = createContext();

const CartContext = ({ children }) => {
    const [items, setItems] = useState([]);

    const isInCart = (itemId) => {
        let rslt = false;
        if (items.filter(itm => itm.id === itemId).length > 0) {
            rslt = true
        }
        return rslt
    }

    const addItem = (item, qnty) => {
        if  (!isInCart(item.id)){

            item.qnty = parseInt(qnty)
            setItems([...items, item])

        } else {

            let updt_qnty_items = items.map(elmn => (elmn.id === item.id ? {...elmn, qnty : elmn.qnty + parseInt(qnty)} : elmn))
            //console.log('items actuslizado',updt_qnty_items);
            setItems([...updt_qnty_items])

        }
    }
  
    const removeItem = (itemId) => {
        var elms = items.filter(item => item.id != itemId); 
        
        setItems([...elms])

    }

    const clear = () => {

        setItems([])
    }

    return (
        <ItemsContext.Provider value={{items, addItem, removeItem, clear}}>
            {children}
        </ItemsContext.Provider>
    )
}

export default CartContext
