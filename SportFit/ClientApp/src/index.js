import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./_helpers/store";
import {ToastProvider} from 'react-toast-notifications';

import App from './App';
import ErrorBoundry from './_components/special-components/error-boundry'

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        
            <ErrorBoundry>
                <App />
            </ErrorBoundry>
    </Provider>,
rootElement);

registerServiceWorker();

