const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');

// Cargar las variables de entorno desde la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3309, 
  user: process.env.MYSQL_USER,  
  password: process.env.MYSQL_PASSWORD,  
  database: process.env.MYSQL_DATABASE,  
});

// Verificar conexión
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  }
  console.log('Conexión exitosa a la base de datos.');
});

module.exports = db;
