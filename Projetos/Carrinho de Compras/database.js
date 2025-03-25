import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function getProducts() {
    const [rows] = await pool.query('SELECT * FROM produto');
    return rows;
};

export async function getProduct(id) {
    const [rows] = await pool.query(`SELECT * 
    FROM produto
    WHERE id = ?
    `, [id]);
    return rows[0];
};

export async function createProduct(nome, preco) {
    const [result] = await pool.query(`
    INSERT INTO produto (nome, preco)
    VALUES (?, ?)
    `, [nome, preco])
    return result.insertId;
};