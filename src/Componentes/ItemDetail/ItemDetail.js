import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)


    const handledOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img
        }

        addItem(item, quantity)
    }



    return(
        <div class="container , contenedor-detalle">
            <picture>
                <img src={img} alt={name} class="img-fluid img-detalle" ></img>
            </picture>
            <article class='contenedor_article'>
                <header class='contenedor_article-header'>
                    <h2 class='header-titulo'>{name}</h2>
                    <hr class="mb-3"/>
                </header>
                <section class='contendor_article-section'>
                    <p class='contendor_article-section-p'>
                        Categoria: {category}
                    </p>
                    <p class='contendor_article-section-p'>
                        Descripcion: {description}
                    </p>
                    <p class='contendor_article-section-p'>
                        Precio: ${price}
                    </p>
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' class='btn btn-secondary'>Terminar Compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handledOnAdd} />
                        )
                    }
                </footer>
            </article>
        </div>
    )
}


export default ItemDetail;