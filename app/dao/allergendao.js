const pool = require('../config/dbconfig');

class AllergenDao {

    constructor() {
        this.pool = pool
    }

    findAll(req, res) {
        pool.query('SELECT * FROM allergens', (err, rows) => {
            if(err) {
                console.log(err)
            } else {
                console.log(rows)
                res.send(rows);
            }
        })
    }

}

module.exports = AllergenDao;