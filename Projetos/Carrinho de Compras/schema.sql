CREATE DATABASE IF NOT EXISTS carrinho_compras;

USE carrinho_compras;

CREATE TABLE IF NOT EXISTS produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

INSERT INTO produto (nome, preco)
VALUES
('Camiseta', 39.90),
('Tenis', 299.90);