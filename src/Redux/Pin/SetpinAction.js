import { SETPIN_FALIURE,SETPIN_SUCCESS, SETPIN_REQUEST , CHANGEPIN_REQUEST, CHANGEPIN_SUCCESS, CHANGEPIN_FALIURE} from "./SetpinType"
import axios from "axios"

export const setpinRequest = () =>{
    return{
        type: SETPIN_REQUEST
    }
}

export const setpinSuccess = (response) =>{
    return{
        type: SETPIN_SUCCESS,
        payload: response
    }
}

export const setpinFaliure = (error) =>{
    return{
        type: SETPIN_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const postsetpin = (postdata, history) => {
    return(dispatch) => {
        dispatch(setpinRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.post(`${baseUrl}/profile/setting/pin/create`, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(setpinSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error
                dispatch(setpinFaliure(errorMsg))
                // errors()
            })
    }
}


//

//
export const changepinRequest = () =>{
    return{
        type: CHANGEPIN_REQUEST
    }
}

export const changepinSuccess = (response) =>{
    return{
        type:CHANGEPIN_SUCCESS,
        payload: response
    }
}

export const changepinFaliure = (error) =>{
    return{
        type: CHANGEPIN_FALIURE,
        payload: error
    }
}
export const postchangepin = (postdata, history, errors) => {
    return(dispatch) => {
        dispatch(changepinRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.put(`${baseUrl}/profile/setting/pin/update`, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(changepinSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.response.data.message
                dispatch(changepinFaliure(errorMsg))
                console.log(error)
                errors()
            })
    }
}