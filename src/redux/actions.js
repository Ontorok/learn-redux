import axios from "axios";
import { sleep } from "../utility/commonHelper";
import { FETCH_FAILURE, FETCH_LOADING, FETCH_SUCCESS } from "./actionTypes";

export const fetchLoading = (direction) => (dispatch) => {
  dispatch({
    type: FETCH_LOADING,
    payload: { direction },
  });
};

export const userFetch = () => {
  return async (dispatch) => {
    dispatch(fetchLoading(true));
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = res.data;
      await sleep(3000);
      dispatch({
        type: FETCH_SUCCESS,
        payload: { users },
      });
      dispatch(fetchLoading(false));
    } catch (err) {
      dispatch(fetchLoading(false));
      dispatch({
        type: FETCH_FAILURE,
        payload: { error: err.message },
      });
    }
  };
};
