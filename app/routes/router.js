const express = require('express');

const router = express.Router();


router.use('/burgeritems', require('./api/itemroutes'))

router.use('/allergens', require('./api/allergenroutes'))

router.use('/ingredients', require('./api/ingredientroutes'))



module.exports = router;