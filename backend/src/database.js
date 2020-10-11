const mongoose = require('mongoose');
const config = require('./config');

const URI = config.DATABASE_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.once('open', () => console.log("Database Connected succesfully"));