import { WEBHOOK_REQUEST, WEBHOOK_SUCCESS,WEBHOOK_FALIURE } from "./Webhooktype";

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const webhookReducer = (state = initialState, action) => {
    switch(action.type){
        case WEBHOOK_REQUEST:
            return{
                ... state,
                loading: true
            }
        case WEBHOOK_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case WEBHOOK_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
