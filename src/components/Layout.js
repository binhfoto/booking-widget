import React from "react";
import Paper from "material-ui/Paper";
import {body, content_center, content_size} from "../styles";
import injectTapEventPlugin from "react-tap-event-plugin";

const Layout = ({children}) => {
    return (
        <div style={body}>
            <div>
                <Paper style={{... content_size, ...content_center}}>
                    {children}
                </Paper>
            </div>
        </div>
    );
};

injectTapEventPlugin();

export default Layout;