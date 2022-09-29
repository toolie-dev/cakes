import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './nullstyle.css';
import './title.css';
import './img.css';
import App from './components/App/App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);