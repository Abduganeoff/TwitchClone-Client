import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	EDIT_STREAM,
	DELETE_STREM
} from './types';
import stream from '../apis/stream';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = (formValues) => async (dispatch) => {
	const response = await stream.post('/streams', formValues);

	dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
	const response = await stream.get('/stream');

	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
	const response = await stream.get(`/stream/${id}`);

	dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
	const response = await stream.patch(`/stream/${id}`, formValues);

	dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
	await stream.delete(`/stream/${id}`);

	dispatch({ type: DELETE_STREM, payload: id });
};
