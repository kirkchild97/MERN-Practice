import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="row justify-content-center">
      <BrowserRouter className="row justify-content-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/new" element={<ProductForm/>}/>
          <Route path="/product/edit/:id" element={<EditProduct />}/>
          <Route path="/:id" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
