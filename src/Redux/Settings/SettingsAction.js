import {SETTING_REQUEST, SETTING_FALIURE, SETTING_SUCCESS} from './SettingsType'
import axios from "axios"

export const settingRequest = () =>{
    return{
        type: SETTING_REQUEST
    }
}

export const settingSuccess = (response) =>{
    return{
        type: SETTING_SUCCESS,
        payload: response
    }
}

export const settingFaliure = (error) =>{
    return{
        type: SETTING_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const putsetting = (setting) => {
    return(dispatch) => {
        dispatch(settingRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.put(`${baseUrl}/profile/setting/update`,setting, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        }})
            .then( response => {
                console.log(setting)
                const data = response.data
                console.log(`this is setting--- ${data.data}`)
                console.log(response.data)
                dispatch(settingSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(settingFaliure(errorMsg))
            })
    }
}
