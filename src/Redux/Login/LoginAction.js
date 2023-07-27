// import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./LoginTypes" 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import store from "../Store";
import { fetchgetprofile } from '../Getprofile/GetprofileAction';

const AuthActionType = {
    // REGISTER_SUCCESS: "REGISTER_SUCCESS",
    // REGISTER_FAIL: "REGISTER_FAIL",
    LOGIN_START: "LOGIN_START",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
};
var socket
// define the action types
const ON_PEOPLE = 'ON_PEOPLE';
const REQUEST_STATE = 'REQUEST_STATE';
const GET_CHAT = 'GET_CHAT';

// define the action creators
const onPeople = (data) => {
  return {
    type: ON_PEOPLE,
    payload: data
  }
}

const requestState = () => {
  return {
    type: REQUEST_STATE
  }
}

const getChat = (jwt) => {
  return {
    type: GET_CHAT,
    payload: jwt
  }
}
const getprofile = () =>{
  fetchgetprofile()
}
// const logout = () => {
//   var profileData = store.getState().profile.profile;
//   if (!socket) {
//     socket = io.connect("https://credio-api.herokuapp.com/chat", {
//       transports: ["websocket"],
//       query: `phoneNumber=${profileData.message.phoneNumber}`,
//     });
//   }
//   socket.emit('logout');

// }

const baseUrl = "https://fe-sandbox-quick-pay.onrender.com/api/v1"
let autoLogoutTimer;
const LoginAuthAction = (loginState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch({type: AuthActionType.LOGIN_START})
      try {
        const res = await axios.post(`${baseUrl}/auth/login`, loginState);
        const { data } = res;
       
        dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
        if(res.status===200){
            console.log(data)
            autoLogoutTimer = setTimeout(() => {
              dispatch(LogOutAuthAction(history));
            }, 420000);
            // getprofile()
            history();        
        }
      } catch (error) {
        if (error.response) {
          dispatch({
            type: AuthActionType.LOGIN_FAIL,
            payload: error.response.data.message,
          });
          setErrorHandler({ hasError: true, message: error.response.data.message });
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
};
const LogOutAuthAction = (history) => {
  // logout();
  clearTimeout(autoLogoutTimer)
  return async (dispatch) => {
    try {
      // const res = await axios.get("https://credio-api.herokuapp.com/api/v1/auth/login");
      // const { data } = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        // payload: data.message,
      });
      history();
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGOUT_FAIL,
          // payload: error.response.data.message,
        });
      }
    }
  };
};
export {
    // RegisterAuthAction,
    AuthActionType,
    LogOutAuthAction,
    LoginAuthAction,
};