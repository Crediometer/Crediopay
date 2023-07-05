import { SETTING_REQUEST, SETTING_SUCCESS, SETTING_FALIURE } from "./SettingsType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const settingReducer = (state = initialState, action) => {
    switch(action.type){
        case SETTING_REQUEST:
            return{
                ... state,
                loading: true
            }
        case SETTING_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case SETTING_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
