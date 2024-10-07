import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';
import {BrowserRouter} from 'react-router-dom';
import store from './states';
import {Provider} from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </Provider>,
);
