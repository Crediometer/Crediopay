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

const baseUrl = "http://www.api-admin.crediopay.com/api/v1"


export const fetchtransaction = (pageNumber, select) => {
    return(dispatch) => {
        dispatch(transactionRequest)
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/transactions/getTransactions?pageNumber=${pageNumber}&&pageSize=${select}`, { headers: headers })
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
