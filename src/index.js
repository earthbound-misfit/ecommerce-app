import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App'
import { store } from './redux/store';
// import { Elements } from '@stripe/react-stripe-js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
  
              {/* <Elements> */}
              <App />
              {/* </Elements> */}

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


