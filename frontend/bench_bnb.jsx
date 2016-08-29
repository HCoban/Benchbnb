import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { requestBenches } from './actions/bench_actions.js';
import { fetchBenches } from './util/bench_api_util'; //for testing
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store; //for testing
  window.requestBenches = requestBenches; //for testing
  window.fetchBenches = fetchBenches; //for testing
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
