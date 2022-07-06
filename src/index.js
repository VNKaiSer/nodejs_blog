const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
app.use(morgan('combined'))

// Temple handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');




app.get('/trang-chu', (req, res) => {
    res.send('home')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})