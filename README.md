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