// Importing express module
const express = require('express')
const cors = require('cors')
const app = express()
const get_id = require('./services/u_cc_gen')
const { search_globalPassports } = require('./services/global_passports_operations')
require('dotenv').config()

app.use(express.json())

app.use(cors())
app.options('/')
app.get('/:p', (req, res) => {
    res.json(search_globalPassports(req.params))
});
 
app.post('/getpassport', (req, res) => {
    const { g, p } = req.body
    
    let result = get_id(p, g)

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({result}));
})

const PORT = process.env.DB_PORT || 5050
 
app.listen(PORT, () => {
  console.log(`Our express server is up on port ${ PORT }`)
})