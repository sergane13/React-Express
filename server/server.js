const express = require('express')

const app = express()

app.get("/api", (req, res) => 
{
    console.log("avion")
    res.json({"users":  ["all", "1", "2"]})
})

app.listen(8080, () => 
{
    console.log("Server started on 8080")
})