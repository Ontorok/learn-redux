import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_LOADING } from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_LOADING: {
      const { direction } = payload;
      return {
        ...state,
        loading: direction,
      };
    }
    case FETCH_SUCCESS: {
      const { users } = payload;
      return {
        ...state,
        users,
      };
    }
    case FETCH_FAILURE: {
      const { error } = payload;
      return {
        ...state,
        error,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default userReducer;
