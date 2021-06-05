import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';

class StreamCreate extends Component {
	renderInput({ input, label }) {
		return (
			<Box my={3}>
				<InputLabel>{label}</InputLabel>
				<Input fullWidth {...input} autoComplete="off" />
			</Box>
		);
	}

	onSubmit(formProps) {
		console.log(formProps);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					endIcon={<SendIcon />}
				>
					Submit
				</Button>
				
			</form>
		);
	}
}

export default reduxForm({
	form: 'streamCreate'
})(StreamCreate);