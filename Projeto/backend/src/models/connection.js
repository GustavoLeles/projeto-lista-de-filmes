const mysql = require('mysql2/promise')

require('dotenv').config()

const connection = mysql.createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'movieDatabase'
});

module.exports = connection