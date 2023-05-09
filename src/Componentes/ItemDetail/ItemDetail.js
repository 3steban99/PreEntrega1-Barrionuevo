import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
                </footer>
            </article>
        </div>
    )
}


export default ItemDetail;