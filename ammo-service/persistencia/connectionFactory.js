var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
            host: 'ec2-52-207-243-85.compute-1.amazonaws.com',
            user: 'ammo',
            password: 'testeammo',
            database: 'ammoDB',
            port: '3306'
    });
}

module.exports = () => {
    return createDBConnection;
}