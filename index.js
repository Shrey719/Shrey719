import express from "express"

let app = express()

app.use(express.static("static"))
app.use(express.static("assets")) 

app.listen(8080);
console.log("Listening on port 8080")