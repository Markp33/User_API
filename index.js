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

// doet ook connect maar dan met console.log
db.connect(err => {
    if (err) {
      console.error('Connection failed:', err.stack);
    } else {
      console.log('Connected to the database!');
    }
  });

  // dit is een welcome messege
app.get('/', (req, res) => {
    res.send('Welcome to API!!!'); 
  });
  
  // GET alle users
  app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users'; 
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Something went wrong!' });  //error message
      } else {
        res.json(results); 
      }
    });
  });

  // Start de server met localhost
const PORT = 5173; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});
//to see the json, dowload insomnia and use this localhost.
