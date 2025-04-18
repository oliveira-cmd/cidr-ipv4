const express = require('express')
const cors = require('cors');
const app = express()
const IpRoute = require('./routes/ip')
app.use(express.json())
app.use(cors());



app.use('/network', IpRoute);

app.listen(5555, () => {
    console.log('Servidor rodando na porta 5555')
})
