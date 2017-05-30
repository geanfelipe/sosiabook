"use strict";

let express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    app = express();

app.use(express.static('./public'))
app.use(express.static('./node_modules'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

load('models',{cwd:'src'})
  .then('controllers')
  .then('routes')
  .into(app)

app.listen(3000,'localhost',() => {
  console.log('running...')
})
