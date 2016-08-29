import * as BENCH_ACTIONS from '../actions/bench_actions';
import { fetchBenches } from '../util/bench_api_util';

const BenchesMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  switch (action.type) {
    case BENCH_ACTIONS.BenchConstants.REQUEST_BENCHES:
      const success = (data) => dispatch(BENCH_ACTIONS.receiveBenches(data));
      fetchBenches(success);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
