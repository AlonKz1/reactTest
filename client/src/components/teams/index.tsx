import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAppointmentsByTeamACTION } from "../../store/asyncFunctions/appointments"
import { getTeamsAction } from "../../store/asyncFunctions/teams"

export function TeamsPage() {
  const teams: [] = useSelector((state: any) => state.teamsReducer.teams)
  // const appointments = useSelector((state: any) => state.appointmentsReducer.appointments)
  const [appointments, setAppointments]: any = useState(null)
  const [team, setTeam] = useState("")

  useEffect(() => {
    async function getTeamsAsync() {
      const data: any = await getTeamsAction()
      return data
    }
    getTeamsAsync()
  }, [])

  useEffect(() => {
    async function getAppointmentsAsync(team: string) {
      const data: any = await getAppointmentsByTeamACTION(team)
      console.log(data)
      return data
    }
    const data: any = getAppointmentsAsync(team)
    setAppointments(data)
  }, [team])

  async function getTeamName(team: string) {
    await setTeam(team)
    console.log(team)
    return
  }
  return (
    <div className="container">
      <h1>Hello Teams Page!</h1>
      <div className="conatiner">
        <select onChange={(e: any) => getTeamName(e.target.value)}>
          <option></option>
          {teams.map((t: any) => (
            <option value={t.team_name}>{t.team_name}</option>
          ))}
        </select>
      </div>
      <div className="appointmentsContainer">
        {appointments ? "ok" : null}
      </div>
    </div>
  )
}

