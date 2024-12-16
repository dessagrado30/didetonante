const mysql = require('mysql2');
const db = mysql.createConnection ({
    host:'https://didetonante.com/',
    user: 'u770439969_root',
    password: 'WSXZ1048',
    database: 'u770439969_PROCESOS',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('base de datos conectada...')
});

module.exports = db;