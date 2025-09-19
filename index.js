const express = require('express');
const apiRouter = require('./server');
const cors = require('corse')
const {errorLogs, handlerError} = require('./middleware/error.handler')
const app = express();
const port = process.env.PORT || 3000;


app.use(corse())
app.use(express.json())

app.get('/', (req, res)=> {
  res.send('Hola mundo')
})


apiRouter(app)

app.use(handlerError)
app.use(errorLogs)


app.listen(port, (req, res)=>{
  console.log(`hola escuchando en el puerto ${port}`)
})


module.exports = { app };
