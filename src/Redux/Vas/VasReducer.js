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
    VAS_PRODUCT_FALIURE,
    VAS_PRODUCT_SUCCESS,
    VAS_PRODUCT_REQUEST,
    VAS_DATA_REQUEST,
    VAS_DATA_SUCCESS,
    VAS_DATA_FALIURE,
    VAS_VERIFY_REQUEST,
    VAS_VERIFY_SUCCESS,
    VAS_VERIFY_FALIURE,
    VAS_CABLE_REQUEST,
    VAS_CABLE_SUCCESS,
    VAS_CABLE_FALIURE,
    VAS_UTILITY_REQUEST,
    VAS_UTILITY_SUCCESS,
    VAS_UTILITY_FALIURE
} from "./VasType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}
//FOR STEP 1 GETTING SERVICES
export const vasReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

// FOR STEP 2 GETTING SERVICES CATEGORIES
export const vascategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_CATEGORY_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_CATEGORY_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_CATEGORY_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

// FOR AIRTIME PAYMENT
export const vasairtimeReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_AIRTIME_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_AIRTIME_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_AIRTIME_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

// FOR STEP 2 GETTING SERVICES PRODUCTS
export const vasproductReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_PRODUCT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_PRODUCT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_PRODUCT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

// FOR DATA PAYMENT
export const vasdataReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_DATA_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_DATA_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_DATA_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

// FOR VERIFY CABLE
export const vasverifyReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_VERIFY_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_VERIFY_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_VERIFY_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}


// FOR CABLE PAYMENT
export const vascableReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_CABLE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_CABLE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_CABLE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

// FOR CABLE PAYMENT
export const vasutilityReducer = (state = initialState, action) => {
    switch(action.type){
        case VAS_UTILITY_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAS_UTILITY_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAS_UTILITY_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}