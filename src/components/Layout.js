import React, {PropTypes} from "react";
import Card from "material-ui/Card";
import {body, content_center, content_size} from "../styles";
import injectTapEventPlugin from "react-tap-event-plugin";

const Layout = ({children}) => {
    return (
        <div style={body}>
            <div>
                <Card style={{... content_size, ...content_center}}>
                    {children}
                </Card>
            </div>
        </div>
    );
};

injectTapEventPlugin();

export default Layout;