import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { requestBenches } from './actions/bench_actions.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store; //for testing
  window.requestBenches = requestBenches; //for testing
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hello from root</h1>, root);
});
