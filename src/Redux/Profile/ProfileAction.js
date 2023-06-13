import { 
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FALIURE
} from "./ProfileType"
import axios from "axios"

export const profileRequest = () =>{
    return{
        type: PROFILE_REQUEST
    }
}

export const profileSuccess = (response) =>{
    return{
        type: PROFILE_SUCCESS,
        payload: response
    }
}

export const profileFaliure = (error) =>{
    return{
        type: PROFILE_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const fetchprofile = () => {
    return(dispatch) => {
        dispatch(profileRequest)
        // console.log(`${localStorage.getItem("auth")}`)
        // let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        axios.get(`${baseUrl}/dashboard/businessProfile`)
            .then( response => {
                const data = response
                console.log(`this is proile analytics--- ${data}`)
                dispatch(profileSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(profileFaliure(errorMsg))
            })
    }
}
