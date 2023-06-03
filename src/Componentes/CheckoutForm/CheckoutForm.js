import { useState } from "react"
import './CheckoutForm.css'


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }


    return (
        <div class='container'>
            <form onSubmit={handleConfirm} >
                <div class='container-form'>
                    <div>
                        <label class='form-label'>
                            Nombre
                        </label>
                        <input class='form-input' type="text" placeholder="Ingrese su nombre" value={name} onChange={({ target }) => setName(target.value)} />
                    </div>
                    <div>
                        <label class='form-label'>
                            Telefono
                        </label>
                        <input class='form-input' type="text" placeholder="Ingrese su telefono" value={phone} onChange={({ target }) => setPhone(target.value)} />
                    </div>
                    <div>
                        <label class='form-label'>
                            Email
                        </label>
                        <input class='form-input' type="text" placeholder="Ingrese su email" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </div>
                </div>
                <div>
                    <button class='btn btn-secondary' type="submit">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm