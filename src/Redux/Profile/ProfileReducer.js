import { 
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FALIURE
} from "./ProfileType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case PROFILE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case PROFILE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
