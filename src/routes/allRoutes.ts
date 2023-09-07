import express from "express"
import {Pool, Client} from 'pg';

const route = express.Router();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '123',
  database: 'dbPhu',
  port: 5432
})

pool.query('SELECT * FROM student', (err, res) => {
  console.log('result is: ',res.rows[0]);
})

async function insertDBStudent(val:any) {
  const query = {
    text: 'INSERT INTO STUDENT(id, name_student, age) VALUES($1, $2, $3)',
    values: [val.id, val.name, val.age]
  }
  await pool.query(query);
  
  await pool.end();
} 

route.get("/", (req, res, next) => {
  const object = { name: "Nguyen Quoc Phu", age: 22, job: "Software Engineer" };
  res.send(object);
});

route.post("/", (req, res, next) => {
  const body = req.body;
  insertDBStudent(body);
  console.log(body);
});

export { route };
