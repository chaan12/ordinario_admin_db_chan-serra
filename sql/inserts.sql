USE ordinario_modelo_admin;

INSERT INTO estudiantes (nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion)
VALUES ('Edu', 'Chan', 'edu.chan@unimodelo.com', '15221403', 20, '5', 'admin', NOW());

INSERT INTO maestros (nombre, edad, telefono, correo, usuario_creacio, fecha_creacion)
VALUES ('Luis', 35, 5551234567, 'luis@poot.com', 'admin', NOW());

INSERT INTO materias (nombre, profesor_id, create_user, create_date)
VALUES ('Administracion de BD', 1, 'admin', NOW());

INSERT INTO calificaciones (estudiante_id, maestro_id, materia_id, create_user, create_date)
VALUES (1, 1, 1, 'admin', NOW());
