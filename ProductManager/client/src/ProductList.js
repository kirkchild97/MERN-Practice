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

    return (
        <ul className="card col-4">
            {products.map(product => (
                <li className="btn" key={product._id}><Link className="text-decoration-none text-dark btn" to={`/${product._id}`}>{product.title}</Link></li>
            ))}
        </ul>
    )
}

export default ProductList;