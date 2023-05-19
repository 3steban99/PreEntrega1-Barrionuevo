import { createContext, useState } from "react";

export const CartContext = createContext({
    cart :[]
})


export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    console.log(cart)


    const addItem = (item, quantity) =>{
        if (!isInCart(item.id)){
            setCart(prev=> [...prev, {...item, quantity}])
        }else{
            console.error('El producto ya fue agregado')
        }
    }


    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod=> prod.id !== itemId)
        setCart(cartUpdate)
    }


    const clearCart = () =>{
        setCart([])
    }


    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    const total = () =>{
        let total = 0;
        cart.forEach((elem)=>{
            total = total + (elem.quantity * elem.price)
        })
        return total
    }


    const totalQuantity = ()=>{
        let cantidad = 0;
        cart.forEach((elem)=>{
            cantidad += elem.quantity
        })
        return cantidad
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )

}