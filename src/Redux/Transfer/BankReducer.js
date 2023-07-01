import { BANK_REQUEST, 
    BANK_SUCCESS, 
    BANK_FALIURE, 
    NAME_REQUEST, 
    NAME_SUCCESS, 
    NAME_FALIURE,
    TRANSFER_REQUEST,
    TRANSFER_SUCCESS,
    TRANSFER_FALIURE,
    TRANSFER_DATA_REQUEST
 } from "./BankType"

const initialState ={
    loading: true,
    transferData: [],
    data: [],
    error: ''
}

export const bankReducer = (state = initialState, action) => {
    switch(action.type){
        case BANK_REQUEST:
            return{
                ... state,
                loading: true
            }
        case BANK_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case BANK_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const banknameReducer = (state = initialState, action) => {
    switch(action.type){
        case NAME_REQUEST:
            return{
                ... state,
                loading: true
            }
        case TRANSFER_DATA_REQUEST:
            console.log("reach here????");
            return {
                ...state,
                transferData: action.payload,
            };  
        case NAME_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case NAME_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const transferReducer = (state = initialState, action) => {
    switch(action.type){
        case TRANSFER_REQUEST:
            return{
                ... state,
                loading: true
            }
        case TRANSFER_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case TRANSFER_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
