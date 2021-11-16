import React, { useContext, useState } from 'react';

import { ItemsContext } from './CartContext'

import db from '../firebase';

import { collection, addDoc, writeBatch, doc } from 'firebase/firestore';

const Checkout = () => {

    const { items } = useContext(ItemsContext);

    let items_qnty = items.reduce((totl, elmn) => totl + elmn.qnty, 0);
    let items_amnt = items.reduce((totl, elmn) => totl + (elmn.qnty * parseFloat(elmn.price)), 0);
    let items_amnt_frmt = Intl.NumberFormat("es-PE", { minimumFractionDigits: 2 }).format(items_amnt);
    let items_resm = [];
    let order_id = ""

    function getItemsResm() {
        let resm_elmn = {}
        items.forEach(item => {
            resm_elmn = {}
            resm_elmn.id = item.id
            resm_elmn.title = item.title
            resm_elmn.price = item.price
            resm_elmn.qnty = item.qnty
            items_resm.push(resm_elmn);
        });
    }

    const [buyer, setBuyer] = useState({
        name: '',
        domic: '',
        phone: '',
        mail: ''
    })

    const handleInputChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })
    }

    const CreateOrder = async (e) => {
        e.preventDefault();
        getItemsResm();

        let fs_refr_docm = await addDoc(collection(db, "orders"), {
            buyer: buyer,
            date: Date().toLocaleString(),
            total: items_amnt,
            items: items_resm
        });
        order_id = fs_refr_docm.id

        UpdateItems()

        alert('Orden de compra creada: ' + order_id);
    }

    const UpdateItems = async () => {
        const fs_batch = writeBatch(db)
        items.forEach((elmn) => {
            let fs_ordr_refr = doc(db, "products", elmn.id)
            fs_batch.update(fs_ordr_refr, { "stock": elmn.stock - 1 })
        }
        )
        await fs_batch.commit()
    }

    return (
        <form className="row  g-3 needs-validation" novalidate>
            <div className="col-12 col-md-9">
                <div className="row">
                    <h3>Datos personales</h3>
                </div>
                <div className="row">
                    <div className="col-12">
                        <label for="name" class="form-label">Nombres y apellidos</label>
                        <input type="text" className="form-control" placeholder="Nombres y apellidos" id="name" name="name" onChange={(e) => handleInputChange(e)} required />
                        <div class="valid-feedback">Escriba</div>
                        <label>Domicilio</label>
                        <input type="text" className="form-control" placeholder="Domicilio" name="domic" onChange={(e) => handleInputChange(e)} />
                        <label>Telefono</label>
                        <input type="text" className="form-control" placeholder="Telefono" name="phone" onChange={(e) => handleInputChange(e)} />
                        <label>Correo electrónico</label>
                        <input type="text" className="form-control" placeholder="Correo electrónico" name="mail" onChange={(e) => handleInputChange(e)} />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3">
                <div className="row">
                    <h4>Resumen</h4>
                    <p>Cantidad de productos</p>
                    <p><strong>{items_qnty}</strong></p>
                    <p>Total a pagar</p>
                    <p><strong>{items_amnt_frmt}</strong></p>
                </div>
                <div className="row">
                    <button onClick={e => CreateOrder(e)} className="btn btn-danger">Crear orden de compra</button>
                </div>
            </div>
        </form>
    )
}

export default Checkout
