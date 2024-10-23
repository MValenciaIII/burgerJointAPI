const daoClass = require('../../dao/ingredientdao');

const dao = new daoClass();

const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    dao.findAll(req, res);
})


module.exports = router;