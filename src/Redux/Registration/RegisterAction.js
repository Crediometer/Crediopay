import axios from "axios";
import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TRANSFER_DATA } from "./RegisterType";
export const registerRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};
export const registerSuccess = (register) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: register,
  };
};


export const registerFaliure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};
export const transferData = (data) => {
  return {
    type: TRANSFER_DATA,
    payload: data,
  };
};

// export const traData = (data) => {

//   return async (dispatch) => {

//     dispatch(transferData(data));
//   };
// };
const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"
export const registerData = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(registerRequest())
      try {
        const res = await axios.post(
          `${baseUrl}/auth/sendAuthOtp`,
          registerState
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(registerSuccess(data));
          dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(registerFaliure(error.response));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };