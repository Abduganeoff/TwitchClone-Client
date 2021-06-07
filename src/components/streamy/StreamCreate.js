import React, { Component } from 'react';
import StreamForm from './StreamForm';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {
	onSubmit = (formProps) => {
		this.props.createStream(formProps);
	};

	render() {
		return (
			<div>
				<Typography variant="h5" gutterBottom>
					Create Stream
				</Typography>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
