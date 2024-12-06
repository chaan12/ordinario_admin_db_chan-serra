# ordinario_admin_db_chan-serra

# Elimina datos previos para garantizar que los scripts se ejecuten:
docker-compose down -v

# Levanta el contenedor:
docker-compose up -d

# Entrar a Mysql
docker exec -it ordinario_modelo_admin mysql -u root -p
root123

# Ver datos
USE ordinario_modelo_admin;
SHOW TABLES;

# AWS DATABASE
ls-683fda1259c2f860360ef74665eba03ebf632a0f.cxaoe08gs68k.us-east-1.rds.amazonaws.com
dbmasteruser

# Confirmar si node y Mysql2 estan isntalados 
node -v
npm -v

# Instalar Node (dentro de backend)
npm init -y

# Instalar dependencias
npm install

# Inicar 
npm start
Debe salir (si todo está bien):
-Servidor corriendo en http://localhost:3000
-Conexión exitosa a la base de datos.

# Para facilidad, le agregue unos datos en automático en MySQL
USE ordinario_modelo_admin;
ALTER TABLE estudiantes MODIFY COLUMN fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE estudiantes MODIFY COLUMN usuario_creacio VARCHAR(255) DEFAULT 'admin';
