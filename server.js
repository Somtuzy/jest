import express from 'express'
import knex from 'knex'

const app = express()

const db = knex({
    client: "mysql2",
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password'
    }
})


db.raw('CREATE DATABASE IF NOT EXISTS Tester')
.then(() => {
    console.log(1, 'connected');
    db.destroy()
})
.catch((err) => {
    console.log(2, err);
    db.destroy()
})

db.raw('SHOW DATABASES')
.then((result) => {
    console.log(1, result);
    db.destroy()
})
.catch((err) => {
    console.log(2, err);
    db.destroy()
})

app.listen(3000, () => {
    console.log('server is runnning');
})