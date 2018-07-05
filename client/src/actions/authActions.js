import axios from "axois";
import { GET_ERRORS } from "./types";

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
