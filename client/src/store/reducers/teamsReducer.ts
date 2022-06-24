import { ACTIONS } from "../actions"

const initialState = {
    teams: [],
    isLoading: false
}

export const teamsReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case ACTIONS.TEAMS.GET_TEAMS.IS_LOADING: {
            return { ...state, isLoading: action.payload }
        }
        case ACTIONS.TEAMS.GET_TEAMS.SUCCESS: {
            return { ...state, teams: action.payload }
        }
        default:
            return state
    }
}