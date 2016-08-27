import BenchesMiddleware from './benches_middleware';
import { applyMiddleware } from 'redux';

const RootMiddleware = applyMiddleware(
  BenchesMiddleware
);

export default RootMiddleware;
