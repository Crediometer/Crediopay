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


export const fetchsubaccount = (id) => {
    return(dispatch) => {
        dispatch(subaccountRequest())
        console.log("help")
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.get(`${baseUrl}/vault/accounts/${id}/subaccounts`, { headers: headers })
            .then( response => {
                const data = response.data
                console.log(`this is profile analytics--- ${data}`)
                dispatch(subaccountSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(subaccountFaliure(errorMsg))
            })
    }
}
