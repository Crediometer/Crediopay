import { BANK_REQUEST, BANK_SUCCESS, BANK_FALIURE, NAME_REQUEST, NAME_SUCCESS, NAME_FALIURE, TRANSFER_DATA_REQUEST } from "./BankType"
import axios from "axios"

export const bankRequest = () =>{
    return{
        type: BANK_REQUEST
    }
}

export const bankSuccess = (response) =>{
    return{
        type: BANK_SUCCESS,
        payload: response
    }
}

export const bankFaliure = (error) =>{
    return{
        type: BANK_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"


export const fetchbank = () => {
    return(dispatch) => {
        dispatch(bankRequest)
        // console.log(`${localStorage.getItem("auth")}`)
        // let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        axios.get(`${baseUrl}/transfers/banks`)
            .then( response => {
                const data = response.data.data
                data.sort(function (a, b) {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return textA < textB ? -1 : textA > textB ? 1 : 0;
                 });
                dispatch(bankSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(bankFaliure(errorMsg))
            })
    }
}

export const nameRequest = () =>{
    return{
        type: NAME_REQUEST
    }
}

export const nameSuccess = (response) =>{
    return{
        type: NAME_SUCCESS,
        payload: response
    }
}

export const nameFaliure = (error) =>{
    return{
        type: NAME_FALIURE,
        payload: error
    }
}
export const transferRequestData = (data) => {
    console.log("herre ----");
    return {
      type: TRANSFER_DATA_REQUEST,
      payload: data,
    };
};

export const reqData = (data) => {
    console.log(" 1  dispatched -- ", data);
    return(dispatch) => {
      console.log("dispatched -- ", data);
      dispatch(transferRequestData(data));
    };
};

export const fetchbankname = (nameState) => {
    return(dispatch) => {
        dispatch(nameRequest)
        // console.log(`${localStorage.getItem("auth")}`)
        // let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        console.log(nameState)
        axios.post(`${baseUrl}/transfers/nameEnquiry`, nameState)
            .then( response => {
                const data = response.data.data
                console.log(data);
                dispatch(nameSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(nameFaliure(errorMsg))
            })
    }
}

export const transferRequest = () =>{
    return{
        type: NAME_REQUEST
    }
}

export const transferSuccess = (response) =>{
    return{
        type: NAME_SUCCESS,
        payload: response
    }
}

export const transferFaliure = (error) =>{
    return{
        type: NAME_FALIURE,
        payload: error
    }
}

  

export const postTransfer = (transferState) => {
    return(dispatch) => {
        dispatch(transferRequest)
        // console.log(`${localStorage.getItem("auth")}`)
        // let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        axios.post(`${baseUrl}/transfers/transfer`, transferState)
            .then( response => {
                const data = response.data.data
                console.log(data);
                dispatch(transferSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(transferFaliure(errorMsg))
            })
    }
}
