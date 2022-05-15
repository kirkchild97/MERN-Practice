import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(res => {
                setProduct(res.data.product);
            })
    })

    return (
        <div className="card col-4">
            <p>Title: {product.title}</p>
            <p>Title: ${product.price}</p>
            <p>Title: {product.description}</p>
        </div>
    )
}

export default ProductDetails;