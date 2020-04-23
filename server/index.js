// const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 8080;
const router = require('./router.js');
const path = require('path')

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../public/')));

app.use('/', router);


app.listen(port, function(){
  console.log(`It's Started on PORT ${port}`);
});

//module.exports = connection;