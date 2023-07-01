import { NOTIFICATION_FALIURE, NOTIFICATION_SUCCESS, NOTIFICATION_REQUEST } from "./NotificationType"
import axios from "axios"

export const notificationRequest = () =>{
    return{
        type: NOTIFICATION_REQUEST
    }
}

export const notificationSuccess = (response) =>{
    return{
        type: NOTIFICATION_SUCCESS,
        payload: response
    }
}

export const notificationFaliure = (error) =>{
    return{
        type: NOTIFICATION_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const fetchnotification = () => {
    return(dispatch) => {
        dispatch(notificationRequest)
        // console.log(`${localStorage.getItem("auth")}`)
        // let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        axios.get(`${baseUrl}/notifications/y39uHf1W0Z9X/notifications`)
            .then( response => {
                const data = response.data
                console.log(`this is notiication analytics--- ${data}`)
                dispatch(notificationSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(notificationFaliure(errorMsg))
            })
    }
}
