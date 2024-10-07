const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, "../.env.dev") });
const connection = mysql.createConnection({
  host: process.env.DOCKER_MYSQL_HOST,
  user: process.env.DOCKER_MYSQL_USER,
  password: process.env.DOCKER_MYSQL_PASSWORD,
  database: process.env.DOCKER_MYSQL_DATABASE_NAME,
  port:  process.env.DOCKER_MYSQL_DATABASE_PORT,

});



connection.connect();

const Teacher = {
  create: (idTeacher, teaLink, callback) => {
    const query = 'INSERT INTO t_teacher(idTeacher, teaLink) VALUES (?, ?)';
    connection.query(query, [idTeacher, teaLink], callback);
  },
  read: (idTeacher, callback) => {
    const query = 'SELECT teaLink FROM t_teacher WHERE idTeacher = ?';
    connection.query(query, [idTeacher], callback);
  },
  update: (idTeacher, teaLink, callback) => {
    const query = 'UPDATE t_teacher SET teaLink = ? WHERE idTeacher = ?';
    connection.query(query, [teaLink, idTeacher], callback);
  },
  delete: (idTeacher, callback) => {
    const query = 'DELETE FROM t_teacher WHERE idTeacher = ?';
    connection.query(query, [idTeacher], callback);
  }
};

module.exports = Teacher;
