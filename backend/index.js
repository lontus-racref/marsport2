// Importing express module
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
require('dotenv').config()

mongoose.connect(process.env.ATLAS_URI)
const db = mongoose.connection

db.on('error', err => {
  console.log(err)
})

db.once('connected', () => {
  console.log('Database connected!')
})

//app.options('/')
//app.use(express.json())

app.use(express.json({
  type: ['application/json', 'text/plain']
}))

app.use(cors())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', false)
  next();
});

app.use('/', routes)

//app.get('/:p', (req, res) => {
//    res.json(search_globalPassports(req.params))
//});
 
// app.post('/getpassport', (req, res) => {
//     const { g, p } = req.body
    
//     let result = get_id(p, g)

//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).send(JSON.stringify({result}));
// })

const PORT = process.env.DB_PORT || 5050
 
app.listen(PORT, () => {
  console.log(`Our express server is up on port ${ PORT }`)
})