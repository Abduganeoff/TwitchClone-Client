import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streamy/StreamList';
import StreamCreate from './streamy/StreamCreate';
import StreamEdit from './streamy/StreamEdit';
import StreamDelete from './streamy/StreamDelete';
import StreamShow from './streamy/StreamShow';
import Header from './Header';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<div style={{ marginTop: '70px' }}>
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route
						path="/streams/delete"
						exact
						component={StreamDelete}
					/>
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
