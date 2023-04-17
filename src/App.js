import './App.css';
//import { Toaster } from "react-hot-toast";
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Product from './pages/Product';
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProductedRoute><Home /></ProductedRoute>} />            
        <Route path="/products/:category" element={<ProductedRoute><ProductList /></ProductedRoute>} />
        <Route path="/product/:id" element={<ProductedRoute><Product /></ProductedRoute>} />
        <Route path="/cart" element={<ProductedRoute><Cart /></ProductedRoute>} />
        <Route path="/success" element={<ProductedRoute><Success /></ProductedRoute>} />
      </Routes>
    </Router>
  );
}

function ProductedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  // console.log(isAuth);
  return isAuth ? children : <Navigate replace to={"/login"} />;
}

export default App;

