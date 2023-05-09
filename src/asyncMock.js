import chaleco from './Componentes/ImagenesProductos/chaleco.jpg'
import TopCalza from './Componentes/ImagenesProductos/TopCalza.jpg'
import TopDeportivo from './Componentes/ImagenesProductos/TopDeportivo.jpg'
import Calzetines from './Componentes/ImagenesProductos/Calzetines.jpg'
import BotellaDeportiva from './Componentes/ImagenesProductos/BotellaDeportiva.jpg'
import Botines from './Componentes/ImagenesProductos/botines.jpg'
import Buzo from './Componentes/ImagenesProductos/buzo.jpg'
import Calza from './Componentes/ImagenesProductos/calza.jpg'
import Campera from './Componentes/ImagenesProductos/campera.jpg'
import CorpiñioDeportivo from './Componentes/ImagenesProductos/CorpiñoDeportivo.jpg'
import Mochila from './Componentes/ImagenesProductos/mochila.jpg'
import PesasTobillos from './Componentes/ImagenesProductos/PesasTobillo.jpg'

const products =
    [{id:"1", name:"Chalecos", price: 5000, category:"ropa", img:chaleco , stock: 15, description:""},
    {id:"2", name:"Top + Calza", price: 3000, category:"sport", img:TopCalza, stock: 10, description:""},
    {id:"3", name:"Botella Deportiva", price: 2000, category:"productos sports", img:BotellaDeportiva, stock: 12, description:""},
    {id:"4", name:"Top Deportivo", price: 2500, category:"sport", img:TopDeportivo, stock: 6, description:""},
    {id:"5", name:"Calzetines", price: 1500, category:"ropa", img:Calzetines, stock: 8, description:""},
    {id:"6", name:"Botines", price: 8000, category:"productos sports", img:Botines, stock: 20, description:""},
    {id:"7", name:"Buzo", price: 6000, category:"ropa", img:Buzo, stock: 14, description:""},
    {id:"8", name:"Calza", price: 4000, category:"sport", img:Calza, stock: 11, description:""},
    {id:"9", name:"Campera", price: 10000, category:"ropa", img:Campera, stock: 10, description:""},
    {id:"10", name:"Corpiño Deportivo", price: 2000, category:"sport", img:CorpiñioDeportivo, stock: 19, description:""},
    {id:"11", name:"Mochila", price: 15000, category:"productos sports", img:Mochila, stock: 5, description:""},
    {id:"12", name:"Pesas Tobillos", price: 3200, category:"productos sports", img:PesasTobillos, stock: 7, description:""}

    
    
]


export const getProducts = () => {
    return new Promise((res, err)=>{
        setTimeout(()=>{
            res(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise ((res,err)=>{
        setTimeout(()=>{
            res(products.find(prod=>prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise ((res,err)=>{
        setTimeout(()=>{
            res(products.filter(prod=>prod.category === categoryId))
        },500)
    })
}