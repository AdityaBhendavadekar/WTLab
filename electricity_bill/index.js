const express = require('express')
const cors = require('cors')
const bodyparse = require('body-parser')

const app = express()
app.use(bodyparse.json())
app.use(cors())

const PORT = 3000;

app.get('/', (req, res)=>{
    res.send("hello world")
})


app.post('/calculator', (req, res)=>{
    const units = parseFloat(req.body.units);

    let bill = 0;

    if(units<50){
        bill = units*3.50;
    }
    else if(units>50 && units<100){
        bill = units*4.00;
    }else if(units > 100 && units<250){
        bill = units*5.20;
    }else if(units > 250){
        bill = units*6.50;
    }

    res.json({bill})
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:3000`)
})