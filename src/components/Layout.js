import React, {PropTypes} from "react";
import Card from "material-ui/Card";
import {body} from "../styles";
import injectTapEventPlugin from "react-tap-event-plugin";

const Layout = ({children}) => {
    return (
        <div style={body}>
            <div>
                <Card style={{width: '414px', height: '736px'}}>
                    {children}
                </Card>
            </div>
        </div>
    );
};

/*Layout.componentDidMount = () => {
 injectTapEventPlugin();
 };*/

injectTapEventPlugin();

export default Layout;