import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from "react-router-dom";

export default () => {
    return (
        <Link to="/new/booking">
            <FloatingActionButton secondary={true}>
                <ContentAdd />
            </FloatingActionButton>
        </Link>
    );
};