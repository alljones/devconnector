import axios from "axois";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER  } from "./types";

// Register User
export const registeruser = userData, history => dispatch => {
  //Connect & post to backend route
  axios
    .post("/api/users/register", userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = (userData) => dispatch => {
  axios
    .post("/api/users/user/login", userData)
    .then({
      //Save to localStorage
      const  { token } = res.data;
      //Set Token to Local Storage
      localStorage.setItem('jwtToken', tokem);
      //Set Token to Auth header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));

    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set logged in user
export const setCurrentUser = (decoded) => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
};

//Log Out User
export const logoutUser = (decoded) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header from future request
  setAuthToken(false);
  //Set current user to {} which will isAuthenticated to false
  dispatch(setCurrentUser({}));
};
