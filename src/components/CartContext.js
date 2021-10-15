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

    const addItemP = (item, qnty) => {
        if  (!isInCart(item.id)){

            item.qnty = parseInt(qnty)
            setItems([...items, item])

        } else {

            let bf_items = items.find(elmn => elmn.id = item.id)
            bf_items.qnty += parseInt(qnty)
            
            //setItems(items)
            setItems([bf_items])

        }
    }
    const addItem = (producto,qnty)=>{
        
        if (items.some((product) => product.id === producto.id)) {
            const Productos = items.map((Producto) => {
              if (Producto.id === producto.id) {
                Producto.qnty += parseInt(qnty);
                return Producto;
              } else {
                return Producto;
              }
            });
            setItems ( [...Productos]);
          } else {
            producto.qnty = parseInt(qnty);
            setItems(  [...items, producto]);
          }
    
    }
    const removeItem = (itemId) => {
        var elms = items.filter(item => item.id != itemId); // make a separate copy of the array
        
        setItems([elms])

    }

    const clear = () => {

        setItems([])
    }

    return (
        <ItemsContext.Provider value={{items, setItems, addItem}}>
            {children}
        </ItemsContext.Provider>
    )
}

export default CartContext
