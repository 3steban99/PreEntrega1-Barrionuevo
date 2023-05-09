import './Footer.css'


const Footer = ()=>{
    return(
        <footer class="footer pt-5 pb-4">
            <div class="container text-center text-md-start">
                <div class="row text-center text-md-start">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">NUESTRAS TIENDAS</h5>
                        <hr class="mb-4"/>
                        <p>
                            <a>Tienda 1</a>
                        </p>
                        <p>
                            <a>Tienda 1</a>
                        </p>
                        <p>
                            <a>Tienda 1</a>
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">METODOS DE PAGO</h5>
                        <hr class="mb-4"/>
                        <p>
                            EFECTIVO <br/>
                            TRANSFERENCIA <br/>
                            Mercado Pago <br/>
                        </p>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">SEGUINOS</h5>
                        <hr class="mb-4"/>
                    </div>

                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                        <h5 class="footer-titulo text-uppercase mb-4 font-weight-bold">PREGUNTAS FRECUENTES</h5>
                        <hr class="mb-4"/>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer;