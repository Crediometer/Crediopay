import { STATEMENT_SUCCESS, STATEMENT_REQUEST, STATEMENT_FALIURE } from "./StatementType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const statementReducer = (state = initialState, action) => {
    switch(action.type){
        case STATEMENT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case STATEMENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case STATEMENT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
