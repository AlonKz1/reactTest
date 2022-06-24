import { ACTIONS } from "../actions"

const initialState = {
    appointments: [],
    isLoading: false
}

export const appointmentsReducer = (state: any = initialState, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case ACTIONS.GET_APPOINTMENTS.IS_LOADING: {
            return { ...state, payload: action.payload }
        }
        case ACTIONS.GET_APPOINTMENTS.SUCCESS: {
            return { ...state, payload: action.payload }
        }
        default:
            return state
    }
}