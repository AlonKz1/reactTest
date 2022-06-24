import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function AddAppoinementPage() {
    const teams = useSelector((state: any) => state.teamsReducer.teams)
    const [team, setTeam] = useState("")
    async function getAppointmentsByTeam(team: string) {
        setTeam(team)
        console.log(team)
        return
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    <label>Team Appointment: </label>
                    <select onChange={(e: any) => getAppointmentsByTeam(e.target.value)}>
                        {teams.map((t: any) => (
                            <option value={t.team_name}>{t.team_name}</option>
                        ))}
                    </select>
                </div>
                <div className="row">
                    <label>Description: </label>
                    <input type="text" required placeholder='Type short description'></input>
                </div>
                <div className="row">
                    <label>Pick a date: </label>
                    <input type="date"></input>
                </div>
            </form>
        </div>
    )
}

export default AddAppoinementPage