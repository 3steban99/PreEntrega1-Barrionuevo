import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) =>{
    return(
        <div class="container d-flex justify-content-center align-items-stretch">
            <div class="row">
                {products.map(prod=> <div class="col-12 col-sm-6 col-lg-4 col-xxl-3 col-products">
                    <Item key={prod.id} {...prod}/>
                    </div>)}
            </div>
        </div>
    )
}

export default ItemList;