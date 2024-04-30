import { FORGOT_REQUEST, FORGOT_SUCCESS, FORGOT_FALIURE, OTP_FORGOT_REQUEST, OTP_FORGOT_SUCCESS, OTP_FORGOT_FALIURE, NEW_FORGOT_REQUEST, NEW_FORGOT_SUCCESS, NEW_FORGOT_FALIURE} from "./ForgotType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const forgotReducer = (state = initialState, action) => {
    switch(action.type){
        case FORGOT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case FORGOT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case FORGOT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}


//

//
export const otpforgotReducer = (state = initialState, action) => {
    switch(action.type){
        case OTP_FORGOT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case OTP_FORGOT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case OTP_FORGOT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}


export const newforgotReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_FORGOT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case NEW_FORGOT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case NEW_FORGOT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}