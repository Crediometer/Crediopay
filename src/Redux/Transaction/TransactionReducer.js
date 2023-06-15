import { TRANSACTION_REQUEST, TRANSACTION_FALIURE, TRANSACTION_SUCCESS } from "./TransactionType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case TRANSACTION_REQUEST:
            return{
                ... state,
                loading: true
            }
        case TRANSACTION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case TRANSACTION_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
