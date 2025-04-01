import mysql from 'mysql2';
const connection = mysql.createConnection({
    host: 'mysql-6bea1be-tec-6589.l.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_NkP8sqwt1bgWUtBC010',
    database: 'defaultdb',
    port: 21394
});
connection.connect(error=>{
    if(error) throw error;
    console.log('Conectada');
});

const sql = "CREATE TABLE IF NOT EXISTS usuarios (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255))";
const sql1 ="INSERT INTO usuarios (nombre) VALUES ('Leonardo')";
const sql2 = "SELECT * FROM usuarios";

connection.query(sql2, (error, resultados) => {
    if (error) throw error;
    //res.json(resultados);
    console.log(resultados);
    connection.end();
});
