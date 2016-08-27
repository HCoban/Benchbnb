import BenchesReducer from "./benches_reducer";
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  benches: BenchesReducer
});

export default RootReducer;
