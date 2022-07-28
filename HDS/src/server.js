const express = require('express')
const app = express()
const PORT = 8080
const router = require('./router')
const handlebars = require('express-handlebars')

//handlebars
app.engine(
  "hbs", handlebars.engine({
    extname: "hbs",
    defaultLayout: "index",
    ayoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set('view engine', 'hbs');
app.set('views','./views');
app.get('/', (req, res) => {
  res.render('index');
})

//middleware
app.use(express.urlencoded({extended: true}))
//app.use('/static', express.static(__dirname + 'public'))
app.use(express.json())
app.use('/api/products', router)

//conexión exitosa
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
//error
server.on("error", (err) => {
    console.log( `Se produjo un error: ${error}`)
})

