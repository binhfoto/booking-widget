import {handleAction} from 'redux-actions';
import {selectSessionAction} from '../actions';
import sessions from '../data/sessions'

export const selectSessionReducer = handleAction(
    selectSessionAction,
    (state, { payload }) => payload,
    {}
);

export const sessionsReducer = () => {
    return sessions;
}