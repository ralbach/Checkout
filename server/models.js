const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Checkout'
});

connection.connect(function(err){
  if (err) console.error(err);
  console.log('connected to database!')
});

var db = connection;


module.exports = {
  getPage(callback){
    db.query('SELECT * FROM User;', (err, result) => {
      if (err) callback(err);
      callback(result);
    });
  },
  //does data need to come through the req or can I specify a variable like table? Otherwise, I'll need to just pass table into the request and access w/ req.body.table === 'account'
  postData(req, callback){
    //console.log(req);
    let queryString = `INSERT INTO User (name, email, password, street, houseNum, city, state, zip, phone, ccnum, expiration, cvv, billingZip) VALUES (${req.body.name}, ${req.body.email}, ${req.body.password}, ${req.body.street}, ${req.body.houseNum}, ${req.body.city}, ${req.body.state}, ${req.body.zip}, ${req.body.phone}, ${req.body.ccnum}, ${req.body.expiration}, ${req.body.cvv}, ${req.body.billingZip});`;
    db.query(queryString, (err, result) =>{
      if (err) callback(err);
      callback(result);
    });
  },
}