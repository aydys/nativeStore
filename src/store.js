import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const logMiddlware = ({ getState }) => (next) => (action => {
	console.log(action.type, getState());
	return next(action);
});

const stringMiddleware = () => (next) => (action) => {
	if(typeof action === 'string') {
		return next({
			type: action
		});
	}

	return next(action);
};

const store = createStore(reducer, applyMiddleware( stringMiddleware, logMiddlware));
store.dispatch('Hello World');
export default store;