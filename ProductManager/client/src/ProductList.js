import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(res => {
                console.log('Got Something');
                console.log(res);
                setProducts(res.data.products);
                console.log(products);
            });
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8080/product/${id}/delete`)
            .then(res => {
                console.log(res.data);
                res.data.success ? setProducts(products.filter(prod => prod._id != id)) : 
                console.log('Error Deleting Product');
            })
    }

    return (
        <ul className="card col-4">
            {products.map(product => (
                <li className="btn" key={product._id}>
                    <Link className="text-decoration-none text-dark btn" to={`/${product._id}`}>{product.title}</Link>
                    <button className="btn btn-danger" onClick={()=>deleteProduct(product._id)}>Delete</button>
                    <Link className="btn btn-primary" to={`/product/edit/${product._id}`}>Edit</Link>
                </li>
            ))}
        </ul>
    )
}

export default ProductList;