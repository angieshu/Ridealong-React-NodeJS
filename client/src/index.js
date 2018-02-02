import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import App from './components/App';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App/>,
	document.getElementById('root'));
// registerServiceWorker();



// <BrowserRouter>
// <div>
// <Route exact path='/' component={App} />
// <Route exact path='/customer/:customerName' component={App} render={(props) => <Customer {...props} />} />
// </div>
// </BrowserRouter>,
