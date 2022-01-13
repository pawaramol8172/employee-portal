import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer'
import { applyMiddleware, createStore } from 'redux';
import { loadEmployees } from './Actions/action-creators';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


// let sampleData=[
//   {LocationID:'Mum',EmpCode:'EMP1', Name:'Shashi', Age:26, Department:'DEPT1', Designation:'Manager',Location:'Mumbai',Address:'Mumbai001'},
//   {LocationID:'Mum2',EmpCode:'EMP2', Name:'Amol2', Age:26, Department:'DEPT2', Designation:'Manager',Location:'Mumbai',Address:'Mumbai002'}
// ]

// store.dispatch(loadEmployees(sampleData));

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
