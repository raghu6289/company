const express = require('express')
const db = require('./Models')
const app = express()



app.get("/",(req,res)=>{
    res.send("Welcome to Node")
})

const port = 3000

const start = async()=>{
    await db.sequelize.sync({force:false});
    app.listen(port,()=> console.log(`server is runningc at port ${port}`))
    db.department.create({name:'test'})
}

start()