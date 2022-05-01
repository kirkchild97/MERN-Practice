const express = require('express');
const { route } = require('express/lib/router');

const {
    createUser,
    createCompany,
    createBoth
} = require('../controllers/apiController');

const router = express.Router();

router.get('/api/users/new', createUser);
router.get('/api/companies/new', createCompany);
router.get('/api/user/company', createBoth);

module.exports = router;