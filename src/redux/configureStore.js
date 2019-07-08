import {createStore} from 'redux';
import {Reducer, intialState, initialState} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}