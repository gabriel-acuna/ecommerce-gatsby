import { createStore, compose, applyMiddleware } from 'redux';
import { load, save } from 'redux-localstorage-simple';


import reducer from './reducers/';

const reduxCreateStore =  () => createStore(reducer,
     load(),
     compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default applyMiddleware(
     save()
)(reduxCreateStore);