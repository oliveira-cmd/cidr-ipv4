const express = require('express')
const app = express()
const IpRoute = require('./routes/ip')
app.use(express.json())



app.use('/network', IpRoute);

app.listen(5555, () => {
    console.log('Servidor rodando na porta 5555')
})
