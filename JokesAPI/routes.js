const express = require('express');
const router = express.Router();

const {
    getAllJokes,
    createJoke,
    updateJoke,
    deleteJoke,
    getJoke
} = require('./controller');


router.get('/jokes', getAllJokes);
router.get('/jokes/:id', getJoke);

router.post('/jokes', createJoke);

router.put('/jokes/:id', updateJoke);

router.delete('/jokes/:id', deleteJoke);

module.exports = router;