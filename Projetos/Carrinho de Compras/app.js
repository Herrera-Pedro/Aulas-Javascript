import express from 'express'

import { getProducts, getProduct, createProduct } from './database.js'

const app = express()

app.use(express.json())

app.get('/produtos', async (req, res) => {
    const products = await getProducts()
    res.send(products)
})

app.get('/produtos/:id', async (req, res) => {
    const id = req.params.id
    const product = await getProduct(id)
    res.send(product)
})

app.post('/produtos', async (req, res) => {
    const { nome, preco } = req.body
    const product = await createProduct(nome, preco)
    res.status(201).send(product)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})