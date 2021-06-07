import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

class StreamCreate extends Component {
	renderInput({ input, label, meta }) {
		const isError = meta.touched && meta.error ? true : false;

		return (
			<Box my={3}>
				<InputLabel
					error={isError}
					style={{ marginBottom: '6px', fontWeight: 800 }}
				>
					{label}
				</InputLabel>

				<TextField
					{...input}
					fullWidth
					multiline
					rowsMax={3}
					variant="outlined"
					helperText={isError && meta.error}
					error={isError}
				/>
			</Box>
		);
	}

	onSubmit = (formProps) => {
		this.props.onSubmit(formProps);
	};

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

const validate = (formProps) => {
	const errors = {};

	if (!formProps.title) {
		errors.title = 'You must enter title';
	}
	if (!formProps.description) {
		errors.description = 'You must enter description';
	}
	return errors;
};

export default reduxForm({
	form: 'formStream',
	validate
})(StreamCreate);
