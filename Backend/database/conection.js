
const mysql = require('mysql2');
const db = mysql.createConnection ({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'WSXZ1048',
    database: 'PROCESOS',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('base de datos conectada...')
});

module.exports = db;


//u770439969_