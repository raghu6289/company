require('dotenv/config')
require('express-async-errors')
const express = require('express')
const mainRouter = require('./app/routes/index')
const errorHandler = require('./app/middleware/errorHandler')
const urlNotfound = require('./app/middleware/urlNotfound')
const db = require('./app/models/index')
const app = express()


app.use(express.json())


app.get("/", (req, res) => {
    res.send("Welcome to Node")
})

app.use("/api/v1", mainRouter)

app.use(errorHandler)
app.use(urlNotfound)


const port = 3000

const start = async () => {
    try {
        await db.sequelize.sync({ force: true })
        app.listen(port, () => console.log(`server is runningc at port ${port}`))

    } catch (error) {
        console.log(error);
    }
}

start()