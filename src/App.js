import './App.css';
import BeforeLogin from './Component/BeforeLogin';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Login from './Component/Login'
import Signup from './Component/Signup';
import Home from './Component/Home';
import CartPage from './Component/CartPage';
import { CartProvider } from './Component/CartContext';
import OrderHistoryPage from './Component/OrderHistory';
function App() {
  return (
    <CartProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BeforeLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
        </Routes>
      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
