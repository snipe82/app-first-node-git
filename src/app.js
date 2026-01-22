const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola saludo LOCAL, PROBANDO OTRA VEZCONFLICTOS');
});

app.get('/saludo', (req, res) => {
  res.send('Hola saludo desde PR');
});
  
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
