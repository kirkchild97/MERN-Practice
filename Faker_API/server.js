const express = require('express');

const app = express();
const PORT = 3000;
const apiRouter = require('./routers/apiRoutes');

app.use(apiRouter);

app.listen(PORT, () => {
    console.log('Server Connected')
})