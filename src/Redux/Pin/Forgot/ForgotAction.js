import { FORGOT_REQUEST, FORGOT_SUCCESS, FORGOT_FALIURE,OTP_FORGOT_REQUEST, OTP_FORGOT_SUCCESS, OTP_FORGOT_FALIURE,  NEW_FORGOT_REQUEST, NEW_FORGOT_SUCCESS, NEW_FORGOT_FALIURE} from "./ForgotType"
import axios from "axios"

export const forgotRequest = () =>{
    return{
        type: FORGOT_REQUEST
    }
}

export const forgotSuccess = (response) =>{
    return{
        type: FORGOT_SUCCESS,
        payload: response
    }
}

export const forgotFaliure = (error) =>{
    return{
        type: FORGOT_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const postforgot = (postdata, history, errors) => {
    return(dispatch) => {
        dispatch(forgotRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.post(`${baseUrl}/profile/setting/pin/otp/send
        `, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(forgotSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error
                dispatch(forgotFaliure(errorMsg))
                errors()
            })
    }
}
//

//
export const otpforgotRequest = () =>{
    return{
        type: OTP_FORGOT_REQUEST
    }
}

export const otpforgotSuccess = (response) =>{
    return{
        type: OTP_FORGOT_SUCCESS,
        payload: response
    }
}

export const otpforgotFaliure = (error) =>{
    return{
        type: OTP_FORGOT_FALIURE,
        payload: error
    }
}
export const postotpforgot = (postdata, history) => {
    return(dispatch) => {
        dispatch(otpforgotRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))

        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.post(`${baseUrl}/profile/setting/pin/otp`, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(otpforgotSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.response
                dispatch(otpforgotFaliure(errorMsg))
                // errors()
            })
    }
}

export const newforgotRequest = () =>{
    return{
        type: NEW_FORGOT_REQUEST
    }
}

export const newforgotSuccess = (response) =>{
    return{
        type: NEW_FORGOT_SUCCESS,
        payload: response
    }
}

export const newforgotFaliure = (error) =>{
    return{
        type: NEW_FORGOT_FALIURE,
        payload: error
    }
}
export const postnewforgot = (postdata, history) => {
    return(dispatch) => {
        dispatch(newforgotRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.put(`${baseUrl}/profile/setting/pin/forgot`, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(newforgotSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.response
                dispatch(newforgotFaliure(errorMsg))
                // errors()
            })
    }
}