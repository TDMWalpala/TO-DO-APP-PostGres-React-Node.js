const PORT = process.env.PORT ?? 8000;  // Sets the port number based on the environment variable or defaults to 8000

const express = require('express');
const {v4:uuidv4} = require('uuid');
const cors = require('cors')
const app = express();
const pool = require('./db');  // Imports the PostgreSQL connection pool

// app.get('/', (req, res) => {
//   res.send("hello");
// });
app.use(cors())
app.use(express.json())

app.get('/todos/:userEmail', async (req, res) => {
  console.log(req);
  const {userEmail} = req.params;

  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);  // Executes the query to fetch all rows from the "todos" table
    res.json(todos.rows);  // Sends the result as JSON
  } catch (error) {
    console.error(error);
  }
});

// create new todo
app.post('/todos', async(req,res) =>{
  const {user_email,title,progress,date} = req.body
  console.log(user_email,title,progress,date,"hi")
  const id = uuidv4()
  try {
    const newToDo = await pool.query(`INSERT INTO todos(id, user_email,title,progress,dare) VALUES($1,$2,$3,$4,$5)`,[id,user_email,title,progress,date])
    res.json(newToDo)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));  // Starts the server and logs the port number
