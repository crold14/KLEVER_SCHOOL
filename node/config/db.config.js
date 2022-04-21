const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysqlpassword',
    port: 3306,
    database: 'school_system'
});

global.db = pool.promise()