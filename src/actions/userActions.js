import axios from "axios";
import { USER_AUTH_FAIL, USER_AUTH_REQUEST, USER_AUTH_SUCCESS } from "../constants/userConstants";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_AUTH_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = axios.post("/login", { email, password }, config);

    dispatch({
      type: USER_AUTH_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_AUTH_FAIL,
      // @TODO fix the error
      payload: error.response
    });
  }
};

export const register = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_AUTH_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = axios.post("/register", { email, password }, config);

    dispatch({
      type: USER_AUTH_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_AUTH_FAIL,
      // @TODO fix the error
      payload: error.response
    });
  }
}
