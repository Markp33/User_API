// importeer express en mysql2
const express = require('express'); 
const mysql = require('mysql2'); 
const app = express(); 

app.use(express.json()); 

// maakt connectie mat de database
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'mysql2' 
});