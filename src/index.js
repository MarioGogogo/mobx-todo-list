import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import App from './components/App';
import stores from './stores/stores'

ReactDOM.render(
    <Provider {...stores}>
       <App/>
    </Provider>,
   
    document.getElementById('root')
);

serviceWorker.unregister();