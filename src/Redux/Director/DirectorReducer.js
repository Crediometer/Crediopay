import { DIRECTOR_REQUEST, DIRECTOR_SUCCESS, DIRECTOR_FALIURE, GET_DIRECTOR_REQUEST, GET_DIRECTOR_SUCCESS, GET_DIRECTOR_FALIURE } from "./DirectorType"

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

export const getdirectorReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DIRECTOR_REQUEST:
            return{
                ... state,
                loading: true
            }
        case GET_DIRECTOR_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case GET_DIRECTOR_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}