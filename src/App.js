import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar/NavBar';
import Home from './Componentes/Home/Home';
import Footer from './Componentes/Footer/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/Checkout/Checkout';
import WhatsApp from './Componentes/services/WhatsAppLogo/WhatsApp';
import Preguntas from './Componentes/Preguntas/Preguntas';
import Contactos from './Componentes/Contactos/Contactos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='verTodo' element={<ItemListContainer />} />
            <Route path='category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/preguntas' element={<Preguntas />} />
            <Route path='/contactos' element={<Contactos />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
          <WhatsApp />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
