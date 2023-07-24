import { DIRECTOR_REQUEST, DIRECTOR_SUCCESS, DIRECTOR_FALIURE, GET_DIRECTOR_FALIURE, GET_DIRECTOR_SUCCESS, GET_DIRECTOR_REQUEST } from "./DirectorType"
import axios from "axios"

export const directorRequest = () =>{
    return{
        type: DIRECTOR_REQUEST
    }
}

export const directorSuccess = (response) =>{
    return{
        type: DIRECTOR_SUCCESS,
        payload: response
    }
}

export const directorFaliure = (error) =>{
    return{
        type: DIRECTOR_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const postdirector = (postdata, history, errors) => {
    return(dispatch) => {
        dispatch(directorRequest())
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.post(`${baseUrl}/profile/business-partner/more
        `, postdata, { headers: headers })
            .then( response => {
                const data = response.data
                console.log(`this is profile analytics--- ${data}`)
                dispatch(directorSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.response.data.message
                dispatch(directorFaliure(errorMsg))
                errors()
            })
    }
}


export const getdirectorRequest = () =>{
    return{
        type: GET_DIRECTOR_REQUEST
    }
}

export const getdirectorSuccess = (response) =>{
    return{
        type: GET_DIRECTOR_SUCCESS,
        payload: response
    }
}

export const getdirectorFaliure = (error) =>{
    return{
        type: GET_DIRECTOR_FALIURE,
        payload: error
    }
}

export const getdirector = () => {
    return(dispatch) => {
        dispatch(getdirectorRequest())
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        axios.get(`${baseUrl}/profile/getPartners`, { headers: headers })
            .then( response => {
                const data = response.data
                console.log(`this is profile analytics--- ${data}`)
                dispatch(getdirectorSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.response.data.message
                dispatch(getdirectorFaliure(errorMsg))
            })
    }
}