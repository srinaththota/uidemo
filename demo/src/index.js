import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux' 
import  LoginReducer  from './store/loginreducer';
import ReduxThunk from 'redux-thunk'
import fetchReducers from './store/fetchdata/fetchReducers';
const rootReducers=combineReducers({
  login:LoginReducer,
  data:fetchReducers
  })

  const store=createStore(rootReducers,applyMiddleware(ReduxThunk))
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
