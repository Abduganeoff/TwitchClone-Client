import {
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	EDIT_STREAM,
	DELETE_STREM
} from '../actions/types';
import _ from 'lodash';

const streamReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

export default streamReducer;
