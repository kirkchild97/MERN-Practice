const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8080;
const MONGOdbURI = 'mongodb+srv://kirkchild:123abcdummy@socialmediaclone.4alzb.mongodb.net/MERNStack?retryWrites=true&w=majority';

const productRoutes = require('./routers/product');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(productRoutes);

mongoose.connect(MONGOdbURI).then(() => {
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server is connected on PORT: ${PORT}`);
    })
}).catch(err => {
    console.log(`Error Connecting to the database`);
})