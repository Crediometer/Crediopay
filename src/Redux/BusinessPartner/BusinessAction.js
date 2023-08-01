import { REG_BUSINESS_REQUEST, REG_BUSINESS_FALIURE, REG_BUSINESS_SUCCESS } from "./BusinessType"
import axios from "axios"

export const businessRequest = () =>{
    return{
        type: REG_BUSINESS_REQUEST
    }
}

export const businessSuccess = (response) =>{
    return{
        type: REG_BUSINESS_SUCCESS,
        payload: response
    }
}

export const businessFaliure = (error) =>{
    return{
        type: REG_BUSINESS_FALIURE,
        payload: error
    }
}

const baseUrl = "http://www.api-admin.crediopay.com/api/v1"


export const postbusinesspartner = (postdata, history, errors) => {
    return(dispatch) => {
        dispatch(businessRequest())
        
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.post(`${baseUrl}/profile/business-partner`, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(businessSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.response.data.message
                dispatch(businessFaliure(errorMsg))
                errors()
            })
    }
}
