import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
            <Route path="home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
