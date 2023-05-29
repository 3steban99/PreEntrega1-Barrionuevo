import { useContext } from 'react';
import './Estiloicono.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div class="icon">
            <Link to='/cart' class="bi bi-cart4 i-navbar"></Link>
            <div class='icon-quantity' style={{ display: totalQuantity() > 0 ? 'block' : 'none' }}>
                {totalQuantity()}
            </div>

        </div>
    )
}

export default CartWidget;