import { BUSINESS_REQUEST, BUSINESS_SUCCESS, BUSINESS_FALIURE } from "./BusinessType"

import axios from "axios"
export const businessRequest = () =>{
    return{
        type: BUSINESS_REQUEST
    }
}

export const businessSuccess = (response) =>{
    return{
        type: BUSINESS_SUCCESS,
        payload: response
    }
}

export const businessFaliure = (error) =>{
    return{
        type: BUSINESS_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"

export const postbusiness = (nameState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(businessRequest())
        // console.log(`${localStorage.getItem("auth")}`)
        // let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        console.log(nameState)
        try{
            const response =  await axios.post(`${baseUrl}/profile/business-information`, nameState)
            const data = response.data.data
            console.log(data);
            dispatch(businessSuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error) {
            const errorMsg = error.message
            dispatch(businessFaliure(errorMsg))
            setErrorHandler({ hasError: true, message: error.response.data.message });
        }
    }
}
