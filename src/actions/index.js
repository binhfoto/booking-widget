import {createAction, createActions} from 'redux-actions';

export const selectAction = createActions({
    SESSION: session => session,
    DATE: date => date
});

export const selectSessionAction = createAction(
    'SELECT_SESSION',
    session => session
);