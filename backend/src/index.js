require('dotenv').config();

require('./database');

const app = require('./app');
const port =  app.get('port');

async function main() {
    try {
        await app.listen(port);
    } catch (error) {
        console.log(error)
    }
    console.log(`Server listening on port ${port}`);
}

main();