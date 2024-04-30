// import { fetchgetprofile } from "../Getprofile/GetprofileAction"
import { VAULT_REQUEST, VAULT_SUCCESS, VAULT_FALIURE } from "./VaultType"
import axios from "axios"

export const vaultRequest = () =>{
    return{
        type: VAULT_REQUEST
    }
}

export const vaultSuccess = (response) =>{
    return{
        type: VAULT_SUCCESS,
        payload: response
    }
}

export const vaultFaliure = (error) =>{
    return{
        type: VAULT_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"

export const fetchvault = (id) => {
    return(dispatch) => {
        dispatch(vaultRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/vault/accounts/${id}`, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vaultSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vaultFaliure(errorMsg))
            })
    }
}
