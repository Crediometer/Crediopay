import { fetchgetprofile } from "../Getprofile/GetprofileAction"
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
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas?.token?.data?.token?.token}`)
        axios.get(`${baseUrl}/vault/accounts/${id}`, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                console.log(`this is valut --- ${data}`)
                console.log(data)
                dispatch(vaultSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vaultFaliure(errorMsg))
            })
    }
}
