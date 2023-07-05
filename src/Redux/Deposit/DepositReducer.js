import {
  DEPOSIT_FALIURE,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,

} from "./DepositType";

const initialState = {
  loading: false,
  deposit: [],
  error: "",
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_REQUEST:
      return {
        loading: true,
        requestData: {},
        deposit: [],
        error: "",
      };
  
    case DEPOSIT_SUCCESS:
      return {
        loading: false,
        deposit: action.payload,
        error: "",
      };
    case DEPOSIT_FALIURE:
      return {
        loading: false,
        requestData: {},
        deposit: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default depositReducer;
