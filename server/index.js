const express = require( 'express' );
const app = express()
const bodyParser = require( 'body-parser' );
const massive = require( 'massive' );
const dotenv = require( 'dotenv' );
require('dotenv').config()
const PORT = 3214;

app.use(bodyParser.json());
app.get("/" , (req, res) => {
    res.status(200).send('hey')
})
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log(`${PORT} people dancing in the moonlight`))