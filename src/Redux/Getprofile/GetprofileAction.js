import { GETPROFILE_REQUEST, GETPROFILE_FALIURE, GETPROFILE_SUCCESS } from "./GetprofileType"
import axios from "axios"

export const getprofileRequest = () =>{
    return{
        type: GETPROFILE_REQUEST
    }
}

export const getprofileSuccess = (response) =>{
    return{
        type: GETPROFILE_SUCCESS,
        payload: response
    }
}

export const getprofileFaliure = (error) =>{
    return{
        type: GETPROFILE_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const fetchgetprofile = () => {
    return(dispatch) => {
        dispatch(getprofileRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/profile/getProfile`,{headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }},)
            .then( response => {
                const data = response.data.data
                dispatch(getprofileSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(getprofileFaliure(errorMsg))
            })
    }
}
