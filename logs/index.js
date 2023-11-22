require('dotenv').config()
//usamos para definir endpoints
//para receber requisições HTTP
const express = require('express')
//usamos para enviar requisições HTTP
const axios = require('axios')
const app = express();
//middleware
app.use(express.json())

const baseLogs = []

app.get('/logs', (req, res) => res.send(baseLogs))  

app.post('/eventos', (req, res) => {
  try{
    const d = new Date();
    let time = d.toLocaleTimeString();
    let date = d.toLocaleDateString();
    baseLogs.push({
        tipo: req.body.type,
        data: date + "|" + time 
    })
  }
  catch(e){}
  res.status(200).end() 
})


app.listen(
  process.env.PORT,
  () => console.log(`Logs: ${process.env.PORT}`)
)