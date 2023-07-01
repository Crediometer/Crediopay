import axios from "axios";
import { OTP_USER_FAILURE, OTP_USER_REQUEST, OTP_USER_SUCCESS } from "./OtpType";

export const otpRequest = () => {
  return {
    type: OTP_USER_REQUEST,
  };
};
export const otpSuccess = (otp) => {
  return {
    type: OTP_USER_SUCCESS,
    payload: otp,
  };
};


export const otpFaliure = (error) => {
  return {
    type: OTP_USER_FAILURE,
    payload: error,
  };
};

export const otpData = (otpState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(otpRequest())
      try {
        console.log(otpState);
        const res = await axios.post(
          "https://credio-api.herokuapp.com/api/v1/auth/VerifyAuthOtp",
          otpState,
        );
        const { data } = res;
        console.log(res);
        console.log(data);
        if (res.status === 200) {
          history()
          dispatch(otpSuccess(data));
        }
      } catch (error) {
        if (error.response) {
          dispatch(otpFaliure(error));
        }
        setErrorHandler({ hasError: true, message: error.response.data});
      }
    };
  };