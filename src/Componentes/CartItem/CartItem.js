import { useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './CartItem.css'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, img, price, quantity, stock }) => {
    const { addItem, removeItem } = useContext(CartContext)


    const handledOnAdd = (quantity) => {
        addItem(quantity)
    }

    return (
        <div class='container cart-container'>
            <div>
                <img src={img} alt={name} width='120px'></img>
            </div>
            <div class='cart-detalle'>
                <h5>{name}</h5>
                <span>precio: {price}</span>
                <span>cantidad: {quantity}</span>
                <ItemCount initial={quantity} stock={stock} onAdd={handledOnAdd} />
            </div>
            <div>
                <button onClick={()=>removeItem(id)}>Eliminar</button>
            </div>
        </div>
    )
}


export default CartItem