import './CartItem.css'

const CartItem = ({id, name, img, price, quantity}) =>{


    return(
        <div class='container cart-container'>
            <h5>{name}</h5>
            <span>precio: {price}</span>
            <span>cantidad: {quantity}</span>
            <img src={img} alt={name} width='120px'></img>
        </div>
    )    
}


export default CartItem