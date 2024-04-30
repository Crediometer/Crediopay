import { SETPIN_REQUEST, SETPIN_SUCCESS, SETPIN_FALIURE, CHANGEPIN_REQUEST, CHANGEPIN_SUCCESS, CHANGEPIN_FALIURE } from "./SetpinType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const setpinReducer = (state = initialState, action) => {
    switch(action.type){
        case SETPIN_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SETPIN_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case SETPIN_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}


//

//
export const changepinReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGEPIN_REQUEST:
            return{
                ... state,
                loading: true
            }
        case CHANGEPIN_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case CHANGEPIN_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}