import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Timestamp, collection, documentId, getDocs, query, where, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../services/firebase/firebaseConfig"
import swal from "sweetalert"
import './Checkout.css'


const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart, totalQuantity } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        if(totalQuantity()===0){
            swal({
                title: ' No tienes nada en el carrito',
                text: 'Vuelve para elegir un producto',
                icon: "error",
                button: "Volver"
            }).then(()=>{
                window.location.href='/verTodo';
            })
        }


        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que estan afuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    const mostrarAlerta= ()=>{
        swal({
            title: ' Tu orden fue confirmada',
            text: `El codigo de su orden es: ${orderId}`,
            icon: "success",
            button: "Ok"
        }).then(()=>{
            window.location.href='/';
        })
    }

    if (loading) {
        return <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Cargando....</span>
        </div>
    }

    if (orderId) {
        return <>{mostrarAlerta()}</>
    }


    return (
        <div>
            <h2>Datos Personales</h2>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}


export default Checkout