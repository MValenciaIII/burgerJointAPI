const express = require('express')

const app = express();
const port = 4001;
const router = require('./app/routes/router')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
    console.log(`App is running on ${port}`);
})

app.use('/api', router);