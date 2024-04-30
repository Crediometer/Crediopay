import { PERSONAL_REQUEST,PERSONAL_SUCCESS, PERSONAL_FALIURE } from "./PersonalType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const personalReducer = (state = initialState, action) => {
    switch(action.type){
        case PERSONAL_REQUEST:
            return{
                ... state,
                loading: true
            }
        case PERSONAL_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case PERSONAL_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
