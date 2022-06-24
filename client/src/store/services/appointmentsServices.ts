import axios from "axios"

const URL = "http://localhost:3500/appointments"

export async function getAppointments(team: string) {
    const results = await axios.get(`${URL}/${team}`)
    console.log(results)
    return results
}

