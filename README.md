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

# Si el puerto 3000 esta ocupado (en mi caso me dio problemas cuando levantaba, tiraba y volvia a levantar)
lsof -i :3000
kill -9 {PID}

# Inicar 
npm start
Debe salir (si todo está bien):
-Servidor corriendo en http://localhost:3000
-Conexión exitosa a la base de datos.

