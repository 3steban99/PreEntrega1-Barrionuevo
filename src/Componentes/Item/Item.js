import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ id, name, img, price, stock }) => {

    return (
        <div class="card h-100">
            <img src={img} class="card-img-top" alt={name}></img>
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">Precio: ${price}</p>
                    <p class="card-text">Stock disponible: ${stock}</p>
                    <Link to={`/item/${id}`} class="btn btn-primary">Ver Detalle</Link>
                </div>
        </div>
    )
}

export default Item;