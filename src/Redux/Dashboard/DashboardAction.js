import { DASHBOARD_FALIURE, 
    DASHBOARD_REQUEST, 
    DASHBOARD_SUCCESS, 
    RECENT_TRANSACTION_REQUEST, 
    RECENT_TRANSACTION_SUCCESS, 
    RECENT_TRANSACTION_FALIURE,
    SUM_TRANSACTION_REQUEST,
    SUM_TRANSACTION_SUCCESS,
    SUM_TRANSACTION_FALIURE
} from "./DashboardType"
import axios from 'axios'

//ACTION FOR ANALYTICS
export const dashboardRequest = () =>{
    return{
        type: DASHBOARD_REQUEST
    }
}

export const dashboardSuccess = (response) =>{
    return{
        type: DASHBOARD_SUCCESS,
        payload: response
    }
}

export const dashboardFaliure = (error) =>{
    return{
        type: DASHBOARD_FALIURE,
        payload: error
    }
}

//ACTION FOR RECENT TRANSACTION
export const recenttranRequest = () =>{
    return{
        type: RECENT_TRANSACTION_REQUEST
    }
}

export const recenttranSuccess = (response) =>{
    return{
        type: RECENT_TRANSACTION_SUCCESS,
        payload: response
    }
}

export const recenttranFaliure = (error) =>{
    return{
        type: RECENT_TRANSACTION_FALIURE,
        payload: error
    }
}

//ACTION FOR SUM TRANSACTION
export const sumtranRequest = () =>{
    return{
        type: SUM_TRANSACTION_REQUEST
    }
}

export const sumtranSuccess = (response) =>{
    return{
        type: SUM_TRANSACTION_SUCCESS,
        payload: response
    }
}

export const sumtranFaliure = (error) =>{
    return{
        type: SUM_TRANSACTION_FALIURE,
        payload: error
    }
}
const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"

//FOR ANALYTICS
export const fetchanalytics = () => {
    return(dispatch) => {
        dispatch(dashboardRequest)
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        
        axios.get(`${baseUrl}/dashboard/analytics`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(dashboardSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(dashboardFaliure(errorMsg))
            })
    }
}

//FOR RECENT TRANSACTION
export const fetchrecenttran = () => {
    return(dispatch) => {
        dispatch(recenttranRequest)
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/dashboard/selectRecentTransactions`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(recenttranSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(recenttranFaliure(errorMsg))
            })
    }
}

//FOR SUM TRANSACTION
export const fetchsumtran = () => {
    return(dispatch) => {
        dispatch(sumtranRequest)
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        console.log(datas?.token?.data?.token?.token)
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/dashboard/calculateTransactionSum`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(sumtranSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(sumtranFaliure(errorMsg))
            })
    }
}