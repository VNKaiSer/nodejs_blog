const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
    res.send('Hello World!')
})

app.get('/tin-tuc', (req, res) => {
    res.send('Dat Vo Tan Dat!')
})

app.get('/dat1', (req, res) => {
    res.send('Đạt khá đẹp trais!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})