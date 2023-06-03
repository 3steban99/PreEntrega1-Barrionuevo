import { useContext} from 'react'
import './CartItem.css'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, img, price, quantity, stock }) => {
    const { removeItem } = useContext(CartContext)


    return (
        <div class='cart-container'>
            <div>
                <img src={img} alt={name} class='cart-img'></img>
            </div>
            <div class='cart-detalle'>
                <h5 class='cart-detalle-name'>{name}</h5>
                <p>precio: ${price}</p>
                <p>cantidad: {quantity}</p>
            </div>
            <div>
                <i class='bi bi-trash-fill cart-icon-delete' onClick={()=>removeItem(id)}></i>
            </div>
        </div>
    )
}


export default CartItem