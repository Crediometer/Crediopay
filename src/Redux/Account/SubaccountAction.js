import { SUBACCOUNT_REQUEST,SUBACCOUNT_SUCCESS, SUBACCOUNT_FALIURE } from "./SubaccountType"
import axios from "axios"

export const subaccountRequest = () =>{
    return{
        type: SUBACCOUNT_REQUEST
    }
}

export const subaccountSuccess = (response) =>{
    return{
        type: SUBACCOUNT_SUCCESS,
        payload: response
    }
}

export const subaccountFaliure = (error) =>{
    return{
        type: SUBACCOUNT_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const fetchsubaccount = (id, size,page) => {
    return(dispatch) => {
        dispatch(subaccountRequest())
        
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.get(`${baseUrl}/vault/accounts/${id}/subaccounts?pageSize=${size}&&pageNumber=${page}`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(subaccountSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(subaccountFaliure(errorMsg))
            })
    }
}
