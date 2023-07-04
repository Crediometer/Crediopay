import { WEBHOOK_REQUEST, WEBHOOK_SUCCESS,WEBHOOK_FALIURE } from "./Webhooktype";
import axios from "axios"

export const webhookRequest = () =>{
    return{
        type: WEBHOOK_REQUEST
    }
}

export const webhookSuccess = (response) =>{
    return{
        type: WEBHOOK_SUCCESS,
        payload: response
    }
}

export const webhookFaliure = (error) =>{
    return{
        type: WEBHOOK_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const putwebhook = (id, hookState) => {
    return(dispatch) => {
        dispatch(webhookRequest())
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas?.token?.data?.token?.token}`)
        axios.put(`${baseUrl}/profile/clients/${id}/webhook`, hookState, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                console.log(`this is web hook--- ${data}`)
                console.log(data)
                dispatch(webhookSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(webhookFaliure(errorMsg))
            })
    }
}
