const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`<form action="/" METHOD="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    outro campo: <input type="text" name="aquioutracoisa"><br>`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('vai pra casa do caralho')
})
