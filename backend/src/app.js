const express = require('express');
const app = express();
const cors = require('cors');

// settings
app.set('port', process.env.PORT || 4600);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api', require('./routes/routes'));


// app.get('/', (req, res) => res.send('<h1>Homepage</h1>'));
// app.get('/login', (req, res) => res.send('<h1>Bienvenido Hermano</h1>'));
// app.get('/logout', (req, res) => res.send('<h1>Hasta luego Hermano</h1>'));
// app.get('/users', (req, res) => res.send('<h1>Estos son los usuarios existentes...</h1>'));

module.exports = app;