import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000

app.use(express.json());
app.use(cors());
const data=[
         {
                  id:101,
                  name:'Aman mansuri',
                  age:20
         },
           {
                  id:102,
                  name:'pman mansuri',
                  age:10
         },  {
                  id:103,
                  name:'nman mansuri',
                  age:30
         },  {
                  id:104,
                  name:'bman mansuri',
                  age:40
         }
]

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.log('Present error: ', err);
//     return err;
//   }
//   console.log('Database connected');
// });

app.get('/', (req, res) => {
//   const query = 'SELECT * FROM data';
//   db.query(query, (err, result) => {
//     if (err) {
//       console.error('Error occurred: ', err);
//       return err;
//     }
//     res.json(result);
//   });
res.json(data)
});

app.listen(port, () => {
  console.log(`Connection is live at http://localhost:${port}`);
});
