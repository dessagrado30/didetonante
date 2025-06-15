const express = require('express');
const cors = require('cors');
const app = express();


const sendersroutes = require('./Backend/routes/sendersroutes.js');

app.use(express.json()); 
app.use(cors()); 

app.get('/', (req, res) => { 
    res.send('<h1>¡Podría hacer parte de lo que viene!.</h1>'); 
})

app.use('/senders', sendersroutes);


app.listen(6500,() => {
    console.log('servidor activo');
});


//express().use('/senders', sendersroutes)
