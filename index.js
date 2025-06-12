import express from "express"
import dotenv from "dotenv";
import routes from "./routes/userRoutes.js";
import connection from "./config/index.js";


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

app.use(routes)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})