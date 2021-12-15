import { INCREMENT } from "./count_types";

export const increment_action = (data) => ({ type: INCREMENT, data });

export const increment_action_async = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment_action(data));
    }, 500);
  };
};
