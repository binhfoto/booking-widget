import React from "react";
import PropTypes from "prop-types";
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import '../styles/common.css';

const CustomList = ({items}) => {

    return (
        <List className="custom-list">
            {
                items.map((item, index, array) => {
                    return (
                        <div key={index}>
                            <ListItem
                                onClick = {item.onItemClick}
                                primaryText={
                                    <div className="custom-list-item-primary">
                                        {item.text}
                                    </div>
                                }
                                secondaryText={
                                    <div className="custom-list-item-secondary">
                                        <span>{item.descLeft}</span>
                                        <span>{item.descRight}</span>
                                    </div>
                                }
                            />
                            {!(index === array.length-1) && <Divider/>}
                        </div>
                    )
                })
            }
        </List>
    );
};

CustomList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            isTextCenter: PropTypes.bool,
            descLeft: PropTypes.string,
            descRight: PropTypes.string,
            linkTo: PropTypes.string,
            data: PropTypes.object,
            onItemClick: PropTypes.func
        })
    )
};

export default CustomList;

