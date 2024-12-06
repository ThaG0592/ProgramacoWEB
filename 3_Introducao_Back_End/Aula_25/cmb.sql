CREATE DATABASE aula25;
USE aula25;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO usuarios (nome, email) VALUES ('Maria', 'maria@gmail.com');
SELECT * FROM usuarios;
