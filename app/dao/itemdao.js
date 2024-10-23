const pool = require('../config/dbconfig');

class ItemDao {

    constructor() {
        this.pool = pool
    }

    findAll(req, res) {
        pool.query('SELECT * FROM items', (err, rows) => {
            if(err) {
                console.log(err)
            } else {
                console.log(rows)
                res.send(rows);
            }
        })
    }

    findItemAllergens(req, res) {
        pool.query('SELECT items.name AS menu_item, allergens.name AS menu_allergen FROM ((item_allergen INNER JOIN items ON item_allergen.item_id = items.id) INNER JOIN allergens ON item_allergen.allergen_id = allergens.id)', (err, rows) => {
            if(err) {
                console.log(err)
            } else {
                console.log(rows)
                res.send(rows);
            }
        })
    }

    postMenuItem(req, res) {
        //?Reading Object Key Names from the requested information
        console.log(req.body);
        let fields = Object.keys(req.body);
        
        //? Reading Object Values from the requested information
        let values = Object.values(req.body);
        let sql = `INSERT INTO items (${fields.join(',')}) VALUES (${Array(values.length).fill('?').join(',')})`;

        pool.query(sql, values, (err,rows) => {
            console.log(rows)
            res.send("data sent")
        } )
    }


}

module.exports = ItemDao;