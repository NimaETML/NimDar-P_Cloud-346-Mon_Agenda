const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, "../.env") });

const connection = mysql.createConnection({
  
    host: process.env.DOCKER_MYSQL_HOST,
    user: process.env.DOCKER_MYSQL_USER,
    password: process.env.DOCKER_MYSQL_PASSWORD,
    database: process.env.DOCKER_MYSQL_DATABASE_NAME,
    port:  process.env.DOCKER_MYSQL_DATABASE_PORT,
    
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect();

/*host: process.env.AZURE_MYSQL_HOST,
user: process.env.AZURE_MYSQL_USER,
password: process.env.AZURE_MYSQL_PASSWORD,
database: process.env.AZURE_MYSQL_DATABASE,
*/