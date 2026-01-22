const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola saludo LOCAL PROBANDO CONFLICTOS');
});

app.get('/saludo', (req, res) => {
    res.send('Hola desde una nueva feature');
  });
  
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
