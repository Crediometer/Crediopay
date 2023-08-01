import {
  DEPOSIT_FALIURE,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
} from "./DepositType";
import axios from "axios";
export const depositRequest = () => {
  return {
    type: DEPOSIT_REQUEST,
  };
};
export const depositSuccess = (deposit) => {
  return {
    type: DEPOSIT_SUCCESS,
    payload: deposit,
  };
};


export const depositFaliure = (error) => {
  return {
    type: DEPOSIT_FALIURE,
    payload: error,
  };
};
const baseUrl = "http://www.api-admin.crediopay.com/api/v1"

export const depositData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(depositRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"));
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas.token.data.token.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/transfers/transfer`,
        depositState,
        { headers: headers }
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(depositSuccess(data)); 
      }
    } catch (error) {
      if (error.response) {
        dispatch(depositFaliure(error.response));
        historyError()
      }
     
    }
  };
};
