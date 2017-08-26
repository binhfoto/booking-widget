import React from "react";
import PropTypes from "prop-types";
import {List} from 'material-ui/List'
import '../styles/common.css'

const CustomHeader = ({items}) => {
    return (
        <List className="list-reset-padding">
            {
                items.map((item, index) => {
                    return React.cloneElement(item, {key: index});
                }
            )}
        </List>
    )
};

CustomHeader.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element)
};

export default CustomHeader;

