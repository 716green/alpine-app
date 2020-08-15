const express = require('express')
const port = 5000
const app = express()
const path = require('path')

console.log(__dirname)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})