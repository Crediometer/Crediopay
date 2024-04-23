import { BUSINESS_REQUEST, BUSINESS_SUCCESS, BUSINESS_FALIURE, KYC_REQUEST, KYC_SUCCESS, KYC_FALIURE } from "./BusinessType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case BUSINESS_REQUEST:
            return{
                ... state,
                loading: true
            }
        case BUSINESS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case BUSINESS_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const kycReducer = (state = initialState, action) => {
    switch(action.type){
        case KYC_REQUEST:
            return{
                // ... state,
                loading: true
            }
        case KYC_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case KYC_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}