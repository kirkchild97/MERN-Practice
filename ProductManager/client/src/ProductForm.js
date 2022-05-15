import { useState, useEffect } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';

const ProductForm = ({edit}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [canSubmit, setCanSubmit] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        console.log('Hitting Edit Page');
        if(edit){
            axios.get(`http://localhost:8080/products/${id}`)
            .then(res => {
                console.log('hitting finish');
                const {product} = res.data;
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
                validateInputs();
            })
        }
    }, [])

    const submitProduct = async (e) => {
        e.preventDefault();
        if(canSubmit){
            console.log('Submitting baby!');
            if(edit){
                await axios.post(`http://localhost:8080/product/edit/${id}`, {title, price, description})
                    .then(res => {
                        if(res.data.success){
                            navigate('/', {replace : true});
                        }
                    })
                    .catch(err => console.log(err));
            }
            else{
                await axios.post('http://localhost:8080/product/new', {title, price, description})
                    .then(res => {
                        navigate('/');
                    });
            }
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        switch(name){
            case 'price':
                value < 0 ? setPrice(0) : setPrice(+value);
                validateInputs();
                break;
            case 'title':
                setTitle(value);
                validateInputs();
                break;
            case 'description':
                setDescription(value);
                validateInputs();
                break;
        }
    }

    const validateInputs = () => {
        let isValid = true;
        if(!title.length){
            console.log('Invalid Title')
            isValid = false;
        }
        if(price < 0){
            console.log('Invliad Price');
            isValid = false;
        }
        if(!description.length){
            console.log('Invalid Descr');
            isValid = false;
        }
        setCanSubmit(isValid);
    }

    
    return (
        <form className="card col-4 p-4" onSubmit={(e)=>submitProduct(e)}>
            <h2>Create Product</h2>
            <div className="my-3">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title"
                onChange={(e)=>handleInput(e)}
                value={title} />
            </div>
            <div className="my-3">
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price"
                onChange={(e)=>handleInput(e)}
                value={price} />
            </div>
            <div className="my-3">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description"
                onChange={(e)=>handleInput(e)}
                value={description} />
            </div>
            <input type="submit" disabled={!canSubmit} value="Create Product" />
        </form>
    )
}

export default ProductForm;