import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';
import './style.scss';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

// comment
// we now wrap App in a Provider


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('main'),
);


// curl -F 'client_id=06b1bbf83926467a8a44fc3678430a64' \
//     -F 'client_secret=a282c871950d4205a14061b8927b05d3' \
//     -F 'grant_type=authorization_code' \
//     -F 'redirect_uri=http://second-chances.surge.sh' \
//     -F 'code=49b4835f79c04a48b9f49394686ff8ff' \
//     https://api.instagram.com/oauth/access_token
