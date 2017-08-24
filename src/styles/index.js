import {cyan500} from 'material-ui/styles/colors';

export const content_center = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};

export const content_size = {
    width: '414px',
    height: '736px'
};

export const body = {
    ...content_center,
    minHeight: '100vh',
    backgroundColor: cyan500
};