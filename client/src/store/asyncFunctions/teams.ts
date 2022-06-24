import { store } from "../index"
import { ACTIONS } from "../actions"
import { getTeams } from "../services/teamsServices"

function getDispatch() {
    return store.dispatch
}

export async function getTeamsAction() {
    const dispatch = getDispatch()
    dispatch(getTeamsIsLoading(true))
    try {
        const teams = await getTeams()
        console.log(teams)
        dispatch(getTeamsSuccess(teams.data))
        return teams.data
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(getTeamsIsLoading(false))
    }
}

function getTeamsIsLoading(payload: boolean) {
    return { type: ACTIONS.TEAMS.GET_TEAMS.IS_LOADING, payload }
}

function getTeamsSuccess(payload: any) {
    return { type: ACTIONS.TEAMS.GET_TEAMS.SUCCESS, payload }
}