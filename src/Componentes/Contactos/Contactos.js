import './Contactos.css'

const Contactos = () => {

    return (
        <div class='container'>
            <div>
                <div class='container-cont'>
                    <h4 class='cont-titulo'>Locales</h4>
                    <div class='cont-direccion'>
                        <i class='bi bi-geo-alt i-cont'></i>
                        <p>Av. Aconquija 1799 - Yerba Buena Shopping. Local 145- KIDS local 171</p>
                    </div>
                    <div class='cont-direccion'>
                        <i class='bi bi-geo-alt i-cont'></i>
                        <p>Rivadavia 441- Famaillá</p>
                    </div>
                    <div class='cont-direccion'>
                        <i class='bi bi-geo-alt i-cont'></i>
                        <p>Lules Eliseo cantón</p>
                    </div>
                </div>
                <div class='container-cont'>
                    <h4 class='cont-titulo'>Contactanos</h4>
                    <div class='cont-detalle'>
                        <h5 class='detalle-titulo'>Redes</h5>
                        <a href='https://www.instagram.com/tu.club10/' target="_blank" rel="noreferrer">
                            <i class="bi bi-instagram i-redes"></i>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100063552429807' target="_blank" rel="noreferrer">
                            <i class="bi bi-facebook i-redes"></i>
                        </a>
                    </div>
                    <div class='cont-detalle'>
                        <h5 class='detalle-titulo'>WhatsApp</h5>
                        <a href="https://linktr.ee/tuclubindumentaria" target="_blank" rel="noreferrer">
                            <i class='bi bi-whatsapp i-redes'></i>
                        </a>
                    </div>
                    <div class='cont-detalle'>
                        <h5 class='detalle-titulo'>Email</h5>
                        <p class='p-email'>
                        <i class="bi bi-envelope i-redes"></i>
                            tuclub@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contactos