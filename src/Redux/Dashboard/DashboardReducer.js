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

const initialState ={
    loading: false,
    data: [],
    error: ''
}
//REDUCER FOR ANALYTICS
export const dashboardReducer = (state = initialState, action) => {
    switch(action.type){
        case DASHBOARD_REQUEST:
            return{
                ... state,
                loading: true
            }
        case DASHBOARD_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case DASHBOARD_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

//REDUCER FOR RECENT TRANSACTION
export const recenttranReducer = (state = initialState, action) => {
    switch(action.type){
        case RECENT_TRANSACTION_REQUEST:
            return{
                ... state,
                loading: true
            }
        case RECENT_TRANSACTION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case RECENT_TRANSACTION_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const sumtranReducer = (state = initialState, action) => {
    switch(action.type){
        case SUM_TRANSACTION_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SUM_TRANSACTION_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case SUM_TRANSACTION_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
