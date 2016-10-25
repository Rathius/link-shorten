import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import LinkCreate from './components/link-create';

const App = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<LinkCreate />
			</div>
		</div>
	);
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.render-target'));
});