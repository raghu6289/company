require('dotenv/config')
const express = require('express')
const db = require('./app/models/index')
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Node")
})

app.use("/api/v1/company", mainRouter)

const port = 3000

const start = async () => {
    await db;
    app.listen(port, () => console.log(`server is runningc at port ${port}`))
    db.department.create({ name: 'test' })
}

start()