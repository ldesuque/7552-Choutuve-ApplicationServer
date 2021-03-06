var MySql = require('sync-mysql');
const dbConfig = require("../config/db.config.js");

const connection = new MySql({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

module.exports = connection;