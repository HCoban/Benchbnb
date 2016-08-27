import * as BENCH_ACTIONS from '../actions/bench_actions';

const BenchesMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  switch (action.type) {
    case BENCH_ACTIONS.BenchConstants.REQUEST_BENCHES:
      console.log("requesting benches");
      break;
    default:
      next(action);
  }
};

export default BenchesMiddleware;
