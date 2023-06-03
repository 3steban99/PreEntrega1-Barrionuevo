import './Footer.css'


const Footer = () => {
    return (
        <footer class="footer pt-5 pb-4">
            <div class="container text-center text-md-start">
                <div class="row text-center text-md-start">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">NUESTRAS TIENDAS</h5>
                        <hr class="mb-4" />
                        <p class='footer-direccion'>
                            <i class="bi bi-geo-alt icon-direccion"></i>
                            <a href='https://goo.gl/maps/LsRzKxbrRbemEe3d6' class='footer-enlace' target="_blank" rel="noreferrer">Av. Aconquija 1799 - Yerba Buena Shopping. Local 145- KIDS local 171</a>
                        </p>
                        <p class='footer-direccion'>
                            <i class="bi bi-geo-alt icon-direccion"></i>
                            <a href='https://goo.gl/maps/TzP9rhqv5aUojRLb9' class='footer-enlace' target="_blank" rel="noreferrer">Rivadavia 441- Famaillá</a>
                        </p>
                        <p class='footer-direccion'>
                            <i class="bi bi-geo-alt icon-direccion"></i>
                            <a href='https://goo.gl/maps/DF964KorJ5hW2LFfA' class='footer-enlace' target="_blank" rel="noreferrer">Lules Eliseo cantón</a>
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">METODOS DE PAGO</h5>
                        <hr class="mb-4" />
                        <p>
                            EFECTIVO <br />
                            TRANSFERENCIA <br />
                            MERCADO PAGO <br />
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">SEGUINOS</h5>
                        <hr class="mb-4" />
                        <a href='https://www.instagram.com/tu.club10/' target="_blank" rel="noreferrer">
                            <i class="bi bi-instagram i-footer"></i>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100063552429807' target="_blank" rel="noreferrer">
                            <i class="bi bi-facebook i-footer"></i>
                        </a>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">PREGUNTAS FRECUENTES</h5>
                        <hr class="mb-4" />
                        <div class='footer-preguntas'>
                            <a href='/preguntas' class='footer-enlace'>¿Quienes somos?</a>
                            <a href='/preguntas' class='footer-enlace'>¿Como realizar un pedido?</a>
                            <a href='/preguntas' class='footer-enlace'>Pago</a>
                            <a href='/preguntas' class='footer-enlace'>Envio</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;