const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'pass@123',
    database: 'nodedb'
});

let sql = `INSERT INTO people(name) values('Jorge Gabriel')`
pool.query(sql, (err, res, fields)=>{
    if(err) throw err;
})

app.get('/', (req,res) => {
    let tableUsers = '<table><thead><tr><th>#</th><th>Name</th></tr></thead><tbody>';

    const getUsers = `SELECT id, name FROM people`;
    pool.query(getUsers, (err, results, fields)=>{
        if(err) throw err;

        for(let people of results) {  
            tableUsers += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
        };

        tableUsers += '</tbody></table>';
        res.send('<h1>Full Cycle Rocks! </h1><br/>'+ tableUsers)
    });
})

app.listen(port)
