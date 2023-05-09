import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return(
        <div class="container d-flex justify-content-center align-items-stretch">
            <div class="row">
                {products.map(prod=> <div class="col-md-3">
                    <Item key={prod.id} {...prod}/>
                    </div>)}
            </div>
        </div>
    )
}

export default ItemList;