import express from "express"
import dotenv from "dotenv";
import routes from "./routes/userRoutes.js";
import pool from "./config/index.js";


dotenv.config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

pool.connect((err) => {
    if (err) {
        console.error("Connection error", err.stack);
    } else {
        console.log("Database connected");
    }
});

app.use(routes)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})