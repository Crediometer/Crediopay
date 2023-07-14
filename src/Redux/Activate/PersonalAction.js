import { PERSONAL_REQUEST, PERSONAL_SUCCESS, PERSONAL_FALIURE } from "./PersonalType"
import axios from "axios"
export const personalRequest = () =>{
    return{
        type: PERSONAL_REQUEST
    }
}

export const personalSuccess = (response) =>{
    return{
        type: PERSONAL_SUCCESS,
        payload: response
    }
}

export const personalFaliure = (error) =>{
    return{
        type: PERSONAL_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"

export const postpersonal = (nameState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(personalRequest())
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.data?.token?.token}`,
        };
        try{
            const response =  await axios.post(`${baseUrl}/profile/personal-info`, nameState,
            { headers: headers })
            const data = response.data.data
            console.log(data);
            dispatch(personalSuccess(data))
            if(response.status===200){
                history();
            }
        }
        catch(error) {
            const errorMsg = error.message
            dispatch(personalFaliure(errorMsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
