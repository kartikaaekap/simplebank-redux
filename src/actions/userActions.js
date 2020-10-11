import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const login = (name, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/login", { name, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data.token,
    });

    localStorage.setItem("token", data.data.token);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      // @TODO fix the error
      payload: error.response.data.error_details,
    });
  }
};

export const register = (name, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/account/add", { name, password }, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.status,
    });

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      // @TODO fix the error
      payload: error.response.data.error_details,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: USER_LOGOUT,
  })
}
