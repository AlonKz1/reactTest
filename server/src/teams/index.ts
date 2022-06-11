import express from "express"
import { getTeamsFromDB } from "./businessLogic"

const router = express.Router()

router.use("/teams", getTeamsHandler)

async function getTeamsHandler(req: any, res: any, next: any) {
    const data = await getTeamsFromDB()
    res.json(data)
}

export default router