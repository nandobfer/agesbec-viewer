const mysql = require('mysql');

const connection = (database) => mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
})


module.exports = connection;