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

export const createStrean = (formValues) => async (dispatch) => {
	const response = await stream.post('/streams', formvalues);

	dispatch({ CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
	const response = await stream.get('/stream');

	dispatch({ FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
	const response = await stream.get(`/stream/${id}`);

	dispatch({ FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
	const response = await stream.patch(`/stream/${id}`, formValues);

	dispatch({ EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
	const response = await stream.delete(`/stream/${id}`);

	dispatch({ DELETE_STREM, payload: response.data });
};
