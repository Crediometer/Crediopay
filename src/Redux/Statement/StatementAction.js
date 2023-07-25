import { STATEMENT_SUCCESS, STATEMENT_REQUEST, STATEMENT_FALIURE } from "./StatementType"
import axios from "axios"

export const statementRequest = () =>{
    return{
        type: STATEMENT_REQUEST
    }
}

export const statementSuccess = (response) =>{
    return{
        type: STATEMENT_SUCCESS,
        payload: response
    }
}

export const statementFaliure = (error) =>{
    return{
        type: STATEMENT_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"

export const fetchstatement = (type, loader) => {
    return(dispatch) => {
        dispatch(statementRequest)
        
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/transactions/download?format=${type}`)
        .then( response => {
            const data = response.data
            if(response.status === 200){
                loader()
            }
            if (type==='pdf'){
                const url = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'statement.pdf');
                document.body.appendChild(link);
                link.click();
            }
            else{
                const url = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'statement.xls');
                document.body.appendChild(link);
                link.click();
            }
            dispatch(statementSuccess(data))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(statementFaliure(errorMsg))
        })
    }
}
