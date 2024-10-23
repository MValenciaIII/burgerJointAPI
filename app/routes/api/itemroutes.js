const daoClass = require('../../dao/itemdao');

const dao = new daoClass();

const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    dao.findAll(req, res);
})

router.get('/allergies', (req, res) => {
    dao.findItemAllergens(req,res);
})

router.post('/createitem', (req, res) => {
    dao.postMenuItem(req, res);
})

module.exports = router;