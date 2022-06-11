import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { initDB } from "../db"
import teamsRouter from "./teams/index"

initDB()

dotenv.config({ path: "../.env" })
const port = process.env.PORT

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("API is working")
})

app.use(teamsRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})