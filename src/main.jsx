import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux-store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux-store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/part-camper-rent/">
        <PersistGate loading={null} persistor={persistor}>
          <div className="container">
            <App />
          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
