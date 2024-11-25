const express = require('express')
const cors = require('cors')
const bodyparse = require('body-parser')
const mysql = require('mysql')

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyparse.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sample"
})

db.connect((err)=>{
    if(err) throw err;
    console.log('connected to mysql');
})

app.get('/', (req, res)=>{
    res.send("hi all");
})

app.post('/insertmarks', (req, res)=>{
    const {name, cnmid,
        cnend,
        wtmid,
        wtend,
        daamid,
        daaend,
        sdammid,
        sdamend,
        edimid,
        ediend,
        total,
        percent} = req.body;

        const query = 'INSERT INTO sem_result (name, cnmid, cnend, wtmid, wtend, daamid, daaend, sdammid, sdamend, edimid, ediend, total, percent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        db.query(query, [name, cnmid, cnend, wtmid, wtend, daamid, daaend, sdammid, sdamend, edimid, ediend, total, percent], (err, result)=>{
            if(err){
                return res.status(500).send(err)
            }
            res.send({message: "Added to database successfully"});
        })

})

app.listen(port, ()=>{
    console.log(`server started on http://localhost:3000`)
})