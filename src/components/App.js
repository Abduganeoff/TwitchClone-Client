import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streamy/StreamList';
import StreamCreate from './streamy/StreamCreate';
import StreamEdit from './streamy/StreamEdit';
import StreamDelete from './streamy/StreamDelete';
import StreamShow from './streamy/StreamShow';
import Header from './Header';
import history from '../history';

function App() {
	return (
		<div>
			<Router history={history}>
				<Header />
				<div style={{ marginTop: '90px' }}>
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route
						path="/streams/edit/:id"
						exact
						component={StreamEdit}
					/>
					<Route
						path="/streams/delete"
						exact
						component={StreamDelete}
					/>
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</Router>
		</div>
	);
}

export default App;
