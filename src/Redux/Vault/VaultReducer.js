import { VAULT_REQUEST, VAULT_SUCCESS, VAULT_FALIURE } from "./VaultType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const vaultReducer = (state = initialState, action) => {
    switch(action.type){
        case VAULT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAULT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAULT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
