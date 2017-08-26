export const logState = ({dispatch, getState}) => next => action => {
    console.log(getState());
    return next(action);
};