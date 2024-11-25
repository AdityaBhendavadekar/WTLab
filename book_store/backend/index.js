const express = require('express')
const bodyparser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyparser.json())

const port=3000;

const sql = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bookstore'
    }
)
sql.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

app.get('/',(req, res)=>{
    res.send("hi all")
})

app.post('/login', (req, res)=>{
    const {uname, pass} = req.body;
    const query = "SELECT * FROM userlogin   WHERE uname = ? AND pass = ?";

    sql.query(query, [uname, pass], (err, results)=>{
        if (err) {
            console.log(err)
            res.status(500).json({message: "Login Unsuccessful"})
        }
        else if(results.length >0){
            console.log("Login Success");
            res.status(200).json({message: "Login successfull"})
        }
        else {
            res.status(401).json({message:"Invalid Credentials"});
        }
    })
})

app.post('/order', (req, res)=>{
    const {uname, bookname} = req.body;
    const query = "INSERT INTO orders (uname, bookname) VALUES (?, ?)";
    sql.query(query, [uname, bookname], (err, results)=>{
        if(err){
            res.status(500).json({msg:"error in server"});
        }
        else{
            res.status(200).json({msg: "order placed successfully"});
        }
    } )
})

app.listen(3000, ()=>{
    console.log(`server is running on port http://localhost:3000`)
})