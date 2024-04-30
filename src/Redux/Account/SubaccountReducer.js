import { SUBACCOUNT_REQUEST,SUBACCOUNT_SUCCESS, SUBACCOUNT_FALIURE } from "./SubaccountType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const subaccountReducer = (state = initialState, action) => {
    switch(action.type){
        case SUBACCOUNT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SUBACCOUNT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case SUBACCOUNT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
