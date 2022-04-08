import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux'

import './index.css';
import App from './App';
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
// on the Provider which we import from react Redux we have a store prop which we have to set.
// And this one is a value which is our Redux store. So this store, which we're importing we're setting this as a value
// for the store prop.
// Now our components in this app can tap into that store. They can get data out of the store. They can set up a subscription to that data to be precise,
// and they also can dispatch actions.
ront.render(<Provider store={store}><App /></Provider>);
