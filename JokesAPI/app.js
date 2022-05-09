const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;
const MONGODBURI = 'mongodb+srv://kirklandchilders:8iz6w7Ax3d3x36dE@socialmediaclone.4alzb.mongodb.net/MERNStack?retryWrites=true&w=majority'

const router = require('./routes');

app.use(express.json(), express.urlencoded({ extended: true }));

app.use('/api', router);

mongoose.connect(MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected.');
    app.listen(PORT, () => {
        console.log('Application is Running!!');
    })
})