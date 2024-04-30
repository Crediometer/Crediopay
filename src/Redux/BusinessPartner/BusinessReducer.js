import { REG_BUSINESS_REQUEST,REG_BUSINESS_FALIURE,REG_BUSINESS_SUCCESS } from "./BusinessType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const businessregReducer = (state = initialState, action) => {
    switch(action.type){
        case REG_BUSINESS_REQUEST:
            return{
                ... state,
                loading: true
            }
        case REG_BUSINESS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case REG_BUSINESS_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
