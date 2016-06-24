import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';

const Routes = (
	<Route path="/" component={App}>
	</Route>
);

// <IndexRoute component={Dashboard} />
// <Route path="*" component={Dashboard} />


module.exports = Routes;