import ControlledCarousel from './Carousel/Carousel';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <h5 class="carousel-text">Imagenes no creadas para un carousel</h5>
            </div>
            <ControlledCarousel />
            <div class='container'>
                <div class='row row-cols-2'>
                    <div class="col-md-6">
                        <Link to={'/verTodo'}>
                            <img class='img-home img-fluid' src='https://i.ibb.co/rcyqrf2/products.jpg' alt='foto tienda'></img>
                        </Link>
                    </div>
                    <div class="col-md-6">
                        <Link to={'/category/ropa'}>
                            <img class='img-home img-fluid' src='https://i.ibb.co/sJYyKCJ/prendas.jpg' alt='foto prenda'></img>
                        </Link>
                    </div>
                    <div class="col-md-6">
                        <Link to={'/category/sport'}>
                            <img class='img-home img-fluid' src='https://i.ibb.co/Vg1dz6s/sports.jpg' alt='foto sport'></img>
                        </Link>
                    </div>
                    <div class="col-md-6">
                        <Link to={'/category/productos sports'}>
                            <img class='img-home img-fluid' src='https://i.ibb.co/hy5qhjp/productos-Sports.jpg' alt='foto productos sports'></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;