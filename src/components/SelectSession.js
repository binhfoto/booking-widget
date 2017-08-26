import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';
import CustomList from './CustomList';
import CustomHeader from './CustomHeader';
import {selectSessionAction} from '../actions'
import '../styles/common.css'

const Link_To_Date = '/select/date';

const SelectSession = ({sessions, selectSession, push}) => {

    let onIconClick = () => {
        push('/');
    }

    let headers = [<ListItem
        className="header"
        disabled={true}
        primaryText={
            <div className="header-primary">
                <IconButton disabled>
                    <BackIcon />
                </IconButton>
                <span className="header-primary-text">Select Session</span>
                <IconButton onClick={onIconClick}>
                    <CloseIcon />
                </IconButton>
            </div>
        }
    />];

    let items = sessions.map(({name, type, duration, price}, index) => (
        {
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
        }
    ));

    return (
        <div className="display-column">
            <CustomHeader items={headers}/>
            <CustomList items={items}/>
        </div>
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
