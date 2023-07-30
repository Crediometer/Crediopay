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

const baseUrl = "http://www.api-admin.crediopay.com/api/v1"


export const putsetting = (setting) => {
    return(dispatch) => {
        dispatch(settingRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.put(`${baseUrl}/profile/setting/update`,setting, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        }})
            .then( response => {
                const data = response.data
                dispatch(settingSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(settingFaliure(errorMsg))
            })
    }
}
