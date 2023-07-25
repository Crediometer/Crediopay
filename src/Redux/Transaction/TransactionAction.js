import { TRANSACTION_REQUEST, TRANSACTION_FALIURE, TRANSACTION_SUCCESS } from "./TransactionType"
import axios from "axios"

export const transactionRequest = () =>{
    return{
        type: TRANSACTION_REQUEST
    }
}

export const transactionSuccess = (response) =>{
    return{
        type: TRANSACTION_SUCCESS,
        payload: response
    }
}

export const transactionFaliure = (error) =>{
    return{
        type: TRANSACTION_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const fetchtransaction = (pageNumber) => {
    return(dispatch) => {
        dispatch(transactionRequest)
        
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/transactions/getTransactions?pageNumber=${1}`)
            .then( response => {
                const data = response.data
                dispatch(transactionSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(transactionFaliure(errorMsg))
            })
    }
}
