import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './EstiloCount.css';

const ItemCount = ({stock, initial, onAdd}) =>{
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div class="container , Contenedor">
            <div class="Contenedor__Controles">
                <Button variant= "outline-secondary" onClick={decrement}>-</Button>
                <h4 class="Number">{quantity}</h4>
                <Button variant= "outline-secondary" onClick={increment}>+</Button>
            </div>
            <div>
                <Button variant="secondary" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount;