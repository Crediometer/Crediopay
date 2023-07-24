import { BUSINESS_REQUEST, BUSINESS_SUCCESS, BUSINESS_FALIURE, KYC_REQUEST, KYC_SUCCESS, KYC_FALIURE } from "./BusinessType"

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
        let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        console.log(nameState)
        const headers = {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        try{
            // const formData = new FormData()
            // formData.append('image', image)
            // const requestdata = {nameState, formData}
            // console.log(formData)
            const response =  await axios.post(`${baseUrl}/profile/business-information`, nameState ,{ headers: headers })
            const data = response
            console.log(data);
            dispatch(businessSuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error) {
            const errorMsg = error.message
            dispatch(businessFaliure(errorMsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}

export const kycRequest = () =>{
    return{
        type: KYC_REQUEST
    }
}

export const kycSuccess = (response) =>{
    return{
        type: KYC_SUCCESS,
        payload: response
    }
}

export const kycFaliure = (error) =>{
    return{
        type: KYC_FALIURE,
        payload: error
    }
}

export const postkyc = (postdata, history, errors) => {
    return(dispatch) => {
        dispatch(kycRequest())
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.post(`${baseUrl}/kyc/verify/bvn`, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                console.log(`this is kyc--- ${data}`)
                if(data.status===200){
                    dispatch(kycSuccess(data.data))
                    history()
                }else{
                    dispatch(kycFaliure(data.message))
                    errors()
                }
                
                // history()
            })
            .catch(error =>{
                // const errorMsg = error.response.data.message
                // dispatch(kycFaliure(errorMsg))
                // errors()
            })
    }
}