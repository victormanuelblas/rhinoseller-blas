import React, {useState} from "react";
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {
    let stck = stock;
    let [qnty, setqnty] = useState(initial)
    
    if (parseInt(qnty) > parseInt(stck)){
        setqnty(stck);
    }

    function Reducir(){
        if (parseInt(qnty) > 1){
            setqnty(qnty = parseInt(qnty) - 1);
            }
        console.log('qnty',qnty);
    }
    function Aumentar(){
        if (parseInt(qnty) < parseInt(stck)){
            setqnty(qnty = parseInt(qnty) + 1);
        }
        console.log('qnty',qnty);
    }

    function AddToCart(){
        if (parseInt(stck) >= 1){
            console.log('agregaremos', qnty);
            //lo dejo comentado, puesto que al no existir está dando error en página
            //onAdd(qnty);
        }
    }

    return (
        <div className="col-12 col-md-3">
            <div className="prod_content">
                <div className="row">
                    <div className="col-12">
                        <h6>Control de almacén</h6>
                        <strong>Aplicación de control de almacén para todo tipo de negocio</strong>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12  d-flex">
                                <div className="col-1">
                                    <div className="prod_content_movs" onClick={Reducir}>—</div>
                                </div>
                                <div className="col-10">
                                    <div className="prod_content_inptqnty">
                                        <input type="text" name="inptqnty" value={qnty}></input>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="prod_content_movs" onClick={Aumentar}>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-light" onClick={AddToCart}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount