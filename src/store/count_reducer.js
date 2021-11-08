import { INCREMENT } from "./count_types";
const initState = 0;
export default function count_reducer(prevState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return prevState + data * 1;
    default:
      return prevState;
  }
}
