import CountUI from "../../components/CountReactRedux";
import { connect } from "react-redux";
import {
  increment_action,
  increment_action_async,
} from "../../store/redux/count_action";

function mapStateToProps(state) {
  return { count: state };
}
function mapDispatchToProps(dispatch) {
  return {
    increment: (number) => dispatch(increment_action(number)),
    incrementAsync: (number) => dispatch(increment_action_async(number)),
  };
}
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
// 简写
export default connect(
  (state) => ({ count: state }),

  { increment: increment_action, incrementAsync: increment_action_async }
)(CountUI);
