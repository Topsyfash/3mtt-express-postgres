import { Client } from "pg";
import express from "express"
import  dotenv  from "dotenv";
import userRoutes from "./Routes/userRoutes.js";
import connection from "./config/db.js";


dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

connection.connect().then((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("Connected")
})

app.use(userRoutes)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})