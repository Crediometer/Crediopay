import { GETPROFILE_REQUEST, GETPROFILE_FALIURE, GETPROFILE_SUCCESS } from "./GetprofileType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const getprofileReducer = (state = initialState, action) => {
    switch(action.type){
        case GETPROFILE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case GETPROFILE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case GETPROFILE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
