import ControlledCarousel from './Carousel/Carousel';
import './Home.css'

const Home = () => {
    return (
        <div>
            <ControlledCarousel />
            <div class='container'>
                <div class='row row-cols-2'>
                    <div class="col-md-6">
                        <img class='img-home' src='https://i.ibb.co/LdhYfX9/tienda.jpg' alt='foto tienda'></img>
                    </div>
                    <div class="col-md-6">
                        <img class='img-home' src='https://i.ibb.co/0qF2H6W/chaleco.jpg'></img>
                    </div>
                    <div class="col-md-6">
                        <img class='img-home' src='https://i.ibb.co/0qF2H6W/chaleco.jpg'></img>
                    </div>
                    <div class="col-md-6">
                        <img class='img-home' src='https://i.ibb.co/0qF2H6W/chaleco.jpg'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;