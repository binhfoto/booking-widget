import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import CustomList from './CustomList';
import {selectSessionAction} from '../actions'

const Link_To_Date = '/select/date';

const SelectSession = ({sessions, selectSession, push}) => {

    let items = sessions.map(({name, type, duration, price}, index) => {

        return {
            text: name,
            isTextCenter: false,
            descLeft: [duration, type].join(' '),
            descRight: price,
            linkTo: Link_To_Date,
            data: sessions[index],
            onItemClick: () => {
                selectSession(sessions[index]);
                push(Link_To_Date);
            }
        };
    });

    return (
        <CustomList items={items}/>
    );
};

SelectSession.propTypes = {
    push: PropTypes.func.isRequired,
    selectSession: PropTypes.func.isRequired,
    sessions: PropTypes.array.isRequired
};

export default
    withRouter(
        connect(
            (state, {history : {push}}) => ({
                    sessions: state.sessions,
                    push
                }
            ),
            dispatch => ({
                selectSession: session => dispatch(selectSessionAction(session))
            })
        )(SelectSession)
    );
