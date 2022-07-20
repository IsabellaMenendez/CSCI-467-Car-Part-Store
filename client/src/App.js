import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Fulfillment from "./pages/Fulfillment"
import Receiving from "./pages/Receiving"
import AdminOrders from "./pages/AdminOrders"
import AdminBrackets from "./pages/AdminBrackets"
import {Routes, Route } from "react-router-dom"


function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/fulfillment' element={<Fulfillment />} />
      <Route path='/receiving' element={<Receiving />} />
      <Route path='/admin-orders' element={<AdminOrders />} />
      <Route path='/admin-brackets' element={<AdminBrackets />} />
    </Routes>
  );
}

export default App;
