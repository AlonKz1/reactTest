import { getConnection } from "../../db";
import { getAppointmentsByTeamIDQuery, getTeamByIDQuery, getTeamsQuery } from "./query";

async function getTeamsFromDB() {
    const query = getTeamsQuery
    console.log(query)

    const [result] = await getConnection().execute(query)
    console.log(result)
    return result
}

async function getTeamID(team: string) {
    const query = getTeamByIDQuery(team)
    const [result] = await getConnection().execute(query)
    return result
}

async function getAppointmentsByTeamID(id: number) {
    const query = getAppointmentsByTeamIDQuery(id)
    const [result] = await getConnection().execute(query)
    console.log("HELLOOOOOOOOOO", result)
    return result
}

export { getTeamsFromDB, getTeamID, getAppointmentsByTeamID }

