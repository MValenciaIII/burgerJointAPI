const pool = require('../config/dbconfig');

class IngredientDao {

    constructor() {
        this.pool = pool
    }

    findAll(req, res) {
        pool.query('SELECT * FROM ingredients', (err, rows) => {
            if(err) {
                console.log(err)
            } else {
                console.log(rows)
                res.send(rows);
            }
        })
    }

}

module.exports = IngredientDao;