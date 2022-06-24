import express from "express"
import { getAppointmentsByTeamID, getTeamID, getTeamsFromDB } from "./businessLogic"

const router = express.Router()

router.use("/teams", getTeamsHandler)
router.use("/appointments/:teamName", getAppointmentsByTeam)

async function getTeamsHandler(req: any, res: any, next: any) {
    const data = await getTeamsFromDB()
    res.json(data)
}

async function getAppointmentsByTeam(req: any, res: any, next: any) {
    const [data]: any = await getTeamID(req.params.teamName)
    console.log(data.team_id)
    const appointments = await getAppointmentsByTeamID(data.team_id)
    res.json(appointments)
}

export default router