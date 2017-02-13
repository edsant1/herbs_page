import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Landscape from './components/Landscape';
import NotFound from './components/NotFound';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/landscape" component={Landscape} />
		<Route path="*" component={NotFound} />
	</Route>
);