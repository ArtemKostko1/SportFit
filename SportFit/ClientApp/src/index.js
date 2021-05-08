import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./actions/store";

import App from './App';
import ErrorBoundry from './components/special-components/error-boundry'

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <App />
        </ErrorBoundry>
    </Provider>,
rootElement);

registerServiceWorker();

