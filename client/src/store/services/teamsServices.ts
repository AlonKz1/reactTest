import axios from "axios"

const URL = "http://localhost:3500"

export async function getTeams() {
    const data = await axios.get(`${URL}/teams`)
    console.log(data)
    return data
}