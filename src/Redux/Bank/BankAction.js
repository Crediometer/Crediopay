import axios from "axios";
import {
  BANK_FALIURE,
  BANK_REQUEST,
  BANK_SUCCESS,
  FETCH_SUCCESS,
  POST_FAILURE,
  POST_SUCCESS,
  TRANSFER_DATA_REQUEST,
} from "./BankType";

export const bankRequest = () => {
  return {
    type: BANK_REQUEST,
  };
};

export const bankSuccess = (bank) => {
  return {
    type: BANK_SUCCESS,
    payload: bank,
  };
};

export const bankFaliure = (error) => {
  return {
    type: BANK_FALIURE,
    payload: error,
  };
};

export const transferRequestData = (data) => {
  return {
    type: TRANSFER_DATA_REQUEST,
    payload: data,
  };
};

export const postSuccess = (name) => {
  return {
    type: POST_SUCCESS,
    payload: name,
  };
};
export const postFailure = (name) => {
  return {
    type: POST_FAILURE,
    payload: name,
  };
};

export const fetchSuccess = (error) => {
  return {
    type: FETCH_SUCCESS,
    payload: error,
  };
};

export const reqData = (data) => {
  return (dispatch) => {
    dispatch(transferRequestData(data));
  };
};



const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"

export const postData = (postState) => {
  return async (dispatch) => {
    try {
      let datas = JSON.parse(localStorage.getItem("auth"));

      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas.token.data.token.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/transfers/nameEnquiry`,
        postState,
        { headers: headers }
      );
      const { data } = res;
      if (res.status == 200) {
        dispatch(postSuccess(data));
      }
    } catch (error) {
      if (error.response) {
        dispatch(postFailure(error));
      }
    }
  };
};

export const fetchBank = () => {
  return (dispatch) => {
    dispatch(bankRequest);
    let datas = JSON.parse(localStorage.getItem("auth"));
    axios.get(
        `${baseUrl}/transfers/banks`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${datas.token.data.token.token}`,
          },
        }
      )
      .then((response) => {
        const bank = response.data.data;
        bank.sort(function (a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        dispatch(bankSuccess(bank));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(bankFaliure(errorMsg));
      });
  };
};
