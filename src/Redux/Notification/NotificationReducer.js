import { NOTIFICATION_SUCCESS, NOTIFICATION_REQUEST, NOTIFICATION_FALIURE, MARK_NOTIFICATION_SUCCESS,MARK_NOTIFICATION_REQUEST,MARK_NOTIFICATION_FALIURE } from "./NotificationType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case NOTIFICATION_REQUEST:
            return{
                ... state,
                loading: true
            }
        case NOTIFICATION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case NOTIFICATION_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
export const marknotificationReducer = (state = initialState, action) => {
    switch(action.type){
        case MARK_NOTIFICATION_REQUEST:
            return{
                ... state,
                loading: true
            }
        case MARK_NOTIFICATION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case MARK_NOTIFICATION_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
