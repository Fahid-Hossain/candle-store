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
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />

              {/* //Private route */}
            <Route path="dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
