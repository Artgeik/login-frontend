import React from 'react';
import { Snackbar,Alert } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/alertActions';

const AlertNotification = (props) => {
    const {severity,open,alertMessageContent,setAlertDetails}=props;
    const handleClose = () => {
        setAlertDetails("info",false,"");
    };
    return (
        <Snackbar anchorOrigin={{vertical:"bottom",horizontal:"center"}} open={open} autoHideDuration={7000} onClose={handleClose}>
            <Alert severity={severity}>{alertMessageContent}</Alert>
        </Snackbar>
    );
};

const mapStateToProps=({alert})=>{
    return {
        ...alert,
    };
};

const mapActionsToProps=(dispatch)=>{
    return {
        ...getActions(dispatch)
    }
};

export default connect(mapStateToProps,mapActionsToProps)(AlertNotification);