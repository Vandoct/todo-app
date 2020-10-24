import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './common/reducer';
import todoReducer from './todo/reducer';

const rootReducer = combineReducers({
	commonReducer,
	todoReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))