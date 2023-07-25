import { 
    VAS_REQUEST,
    VAS_SUCCESS, 
    VAS_FALIURE,
    VAS_CATEGORY_REQUEST,
    VAS_CATEGORY_SUCCESS,
    VAS_CATEGORY_FALIURE,
    VAS_AIRTIME_REQUEST,
    VAS_AIRTIME_SUCCESS,
    VAS_AIRTIME_FALIURE,
    VAS_PRODUCT_REQUEST,
    VAS_PRODUCT_SUCCESS,
    VAS_PRODUCT_FALIURE,
    VAS_DATA_REQUEST,
    VAS_DATA_SUCCESS,
    VAS_DATA_FALIURE,
    VAS_VERIFY_FALIURE,
    VAS_VERIFY_SUCCESS,
    VAS_VERIFY_REQUEST,
    VAS_CABLE_REQUEST,
    VAS_CABLE_SUCCESS,
    VAS_CABLE_FALIURE,
    VAS_UTILITY_REQUEST,
    VAS_UTILITY_SUCCESS,
    VAS_UTILITY_FALIURE
} from "./VasType"
import axios from "axios"

// FOR STEP 1 GETTING SERVICES
export const vasRequest = () =>{
    return{
        type: VAS_REQUEST
    }
}

export const vasSuccess = (response) =>{
    return{
        type: VAS_SUCCESS,
        payload: response
    }
}

export const vasFaliure = (error) =>{
    return{
        type: VAS_FALIURE,
        payload: error
    }
}

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"

export const fetchvasservices = () => {
    return(dispatch) => {
        dispatch(vasRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/vas/getServices`, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vasSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error
                dispatch(vasFaliure(errorMsg))
            })
    }
}


// FOR STEP 2 GETTING SERVICES CATEGORIES
export const vascategoryRequest = () =>{
    return{
        type: VAS_CATEGORY_REQUEST
    }
}

export const vascategorySuccess = (response) =>{
    return{
        type: VAS_CATEGORY_SUCCESS,
        payload: response
    }
}

export const vascategoryFaliure = (error) =>{
    return{
        type: VAS_CATEGORY_FALIURE,
        payload: error
    }
}


export const fetchvascategory = (id) => {
    return(dispatch) => {
        dispatch(vascategoryRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/vas/getServiceCategories?id=${id}`, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vascategorySuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vascategoryFaliure(errorMsg))
            })
    }
}

//FOR AIRTIME PAYMENT
export const vasairtimeRequest = () =>{
    return{
        type: VAS_AIRTIME_REQUEST
    }
}

export const vasairtimeSuccess = (response) =>{
    return{
        type: VAS_AIRTIME_SUCCESS,
        payload: response
    }
}

export const vasairtimeFaliure = (error) =>{
    return{
        type: VAS_AIRTIME_FALIURE,
        payload: error
    }
}


export const postvasairtime = (poststate, history, errors) => {
    return(dispatch) => {
        dispatch(vasairtimeRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.post(`${baseUrl}/vas/airtime/buy`, poststate, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vasairtimeSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vasairtimeFaliure(errorMsg))
                errors()
            })
    }
}

//FOR STEP 3 GETTING SERVICES PRODUCT
export const vasproductRequest = () =>{
    return{
        type: VAS_PRODUCT_REQUEST
    }
}

export const vasproductSuccess = (response) =>{
    return{
        type: VAS_PRODUCT_SUCCESS,
        payload: response
    }
}

export const vasproductFaliure = (error) =>{
    return{
        type: VAS_PRODUCT_FALIURE,
        payload: error
    }
}


export const fetchvasproduct = (id) => {
    return(dispatch) => {
        dispatch(vasproductRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/vas/getServiceProducts?id=${id}`, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vasproductSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vasproductFaliure(errorMsg))
            })
    }
}

//FOR DATA PAYMENT
export const vasdataRequest = () =>{
    return{
        type: VAS_DATA_REQUEST
    }
}

export const vasdataSuccess = (response) =>{
    return{
        type: VAS_DATA_SUCCESS,
        payload: response
    }
}

export const vasdataFaliure = (error) =>{
    return{
        type: VAS_DATA_FALIURE,
        payload: error
    }
}


export const postvasdata = (poststate, history, errors) => {
    return(dispatch) => {
        dispatch(vasdataRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.post(`${baseUrl}/vas/data/buy`, poststate, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vasdataSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vasdataFaliure(errorMsg))
                errors()
            })
    }
}

//FOR VERIFY cable
export const vasverifyRequest = () =>{
    return{
        type: VAS_VERIFY_REQUEST
    }
}

export const vasverifySuccess = (response) =>{
    return{
        type: VAS_VERIFY_SUCCESS,
        payload: response
    }
}

export const vasverifyFaliure = (error) =>{
    return{
        type: VAS_VERIFY_FALIURE,
        payload: error
    }
}


export const postvasverify = (poststate) => {
    return(dispatch) => {
        dispatch(vasverifyRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.post(`${baseUrl}/vas/vas/verify-UC`, poststate, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vasverifySuccess(data))
                // history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vasverifyFaliure(errorMsg))
                // errors()
            })
    }
}


export const vascableRequest = () =>{
    return{
        type: VAS_CABLE_REQUEST
    }
}

export const vascableSuccess = (response) =>{
    return{
        type: VAS_CABLE_SUCCESS,
        payload: response
    }
}

export const vascableFaliure = (error) =>{
    return{
        type: VAS_CABLE_FALIURE,
        payload: error
    }
}


export const postvascable = (poststate, history, errors) => {
    return(dispatch) => {
        dispatch(vascableRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.post(`${baseUrl}/vas/cable/buy`, poststate, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vascableSuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vascableFaliure(errorMsg))
                errors()
            })
    }
}


export const vasutilityRequest = () =>{
    return{
        type: VAS_UTILITY_REQUEST
    }
}

export const vasutilitySuccess = (response) =>{
    return{
        type: VAS_UTILITY_SUCCESS,
        payload: response
    }
}

export const vasutilityFaliure = (error) =>{
    return{
        type: VAS_UTILITY_FALIURE,
        payload: error
    }
}


export const postvasutility = (poststate, history, errors) => {
    return(dispatch) => {
        dispatch(vasutilityRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.post(`${baseUrl}/vas/cable/buy`, poststate, {headers: {
            Authorization: `Bearer ${datas?.token?.data?.token?.token}`,
          }})
            .then( response => {
                const data = response.data
                dispatch(vasutilitySuccess(data))
                history()
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vasutilityFaliure(errorMsg))
                errors()
            })
    }
}
