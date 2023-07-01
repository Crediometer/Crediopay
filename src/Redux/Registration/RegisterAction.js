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
  console.log("herre ----");
  return {
    type: TRANSFER_DATA,
    payload: data,
  };
};

// export const traData = (data) => {
//   console.log(" 1  dispatched -- ", data);
//   return async (dispatch) => {
//     console.log("dispatched -- ", data);
//     dispatch(transferData(data));
//   };
// };

export const registerData = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(registerRequest())
      try {
        console.log(registerState);
        const res = await axios.post(
          "https://credio-api.herokuapp.com/api/v1/auth/sendAuthOtp",
          registerState,
        );
        const { data } = res;
        console.log(res);
        console.log(data);
        if (res.status === 200) {
          history()
          dispatch(registerSuccess(data));
          dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response) {
          dispatch(registerFaliure(error));
        }
        setErrorHandler({ hasError: true, message: error.response.data.message });
      }
    };
  };