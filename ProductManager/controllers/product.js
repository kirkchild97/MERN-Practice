const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    try{
        const {
            title,
            price,
            description
        } = req.body;
        console.log('Hitting');console.log(req.body);
        validateProduct({title, price, description});
        console.log('1');
        const product = new Product({title, price, description});
        console.log('2');
        await product.save();
        console.log('3');
        return res.send({requestSuccess : true});
    }catch(errors) {
        console.log(`Problem Creating Product: ${errors}`);
        console.log(errors);
        return res.send({
            requestSuccess : false,
            errors
        });
    }
}

exports.getAllProducts = async (req, res) => {
    console.log('Hitting Request');
    Product.find().then(products => {
        res.send({products});
    }).catch(err => {
        console.log('Issues getting products');
        res.send({message : 'Problem getting Products'});
    })
}

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({_id : id});
    return res.send({product});
}

exports.updateProduct = async (req, res) => {

}

exports.deleteProduct = async (req, res) => {

}

const validateProduct = ({title, price, description}) => {
    let isValid = true;
    const errors = {};
    if(!title.length){
        isValid = false;
        console.log('Tittle Problem');
        errors.title = 'Title is Invalid';
    }
    if(+price < 0){
        isValid = false;
        console.log('Price Problem');
        errors.price = 'Price cannot be negative';
    }
    if(description.length < 5){
        isValid = false;
        console.log('Descr Problem');
        console.log(description.length);
        errors.description = 'Description must be at least 5 characters long';
    }
    if(!isValid){
        throw new Error(errors);
    }
    return isValid;
}