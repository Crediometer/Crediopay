import { DIRECTOR_REQUEST, DIRECTOR_SUCCESS, DIRECTOR_FALIURE } from "./DirectorType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const directorReducer = (state = initialState, action) => {
    switch(action.type){
        case DIRECTOR_REQUEST:
            return{
                ... state,
                loading: true
            }
        case DIRECTOR_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case DIRECTOR_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
