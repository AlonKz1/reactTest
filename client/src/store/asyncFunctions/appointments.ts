import { store } from "..";
import { ACTIONS } from "../actions";
import { getAppointments } from "../services/appointmentsServices";

function getDispatch() {
    return store.dispatch
}

export async function getAppointmentsByTeamACTION(team: string) {
    const dispatch = getDispatch()
    dispatch(getAppointmentsIsLoading(true))
    try{
        console.log(team)
        const data = getAppointments(team)
        console.log(data)
        return data
    }catch(err){
        console.log(err)
    }finally {
        dispatch(getAppointmentsIsLoading(false))
    }
}

function getAppointmentsIsLoading(payload: boolean) {
    return {type: ACTIONS.GET_APPOINTMENTS.IS_LOADING, payload}
}

function getAppointmentsSuccess(payload: any) {
    return {type: ACTIONS.GET_APPOINTMENTS.SUCCESS, payload}
}