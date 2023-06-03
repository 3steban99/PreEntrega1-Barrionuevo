import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity() === 0) {
        return (
            <div class='container container-noP'>
                <h1>No hay items en el carrito</h1>
                <h5>Volver para seleccionar productos</h5>
                <Link to='/verTodo' class='btn btn-secondary'>Productos</Link>
            </div>
        )
    }

    return (
        <div class='container'>
            {cart.map(p => <div class='container-fluid cart-item'><CartItem key={p.id} {...p} /></div>)}
            <h4 class='cart-item-total'>Total: ${total()}</h4>
            <div class='cart-btn'>
                <button class='btn btn-secondary btn-limpiar' onClick={() => clearCart()}>Limpiar Carrito</button>
                <Link to='/checkout' class='btn btn-secondary btn-checkout'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart