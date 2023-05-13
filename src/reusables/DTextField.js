import React from 'react';
import { TextField } from '@mui/material';

const DTextField = (props) => {
    let {type,hint,updateState,min,max}=props;
    return (
        <div>
            <TextField onChange={updateState} min={min?min:18} max={max?max:90} type={type} id="filled-basic" label={hint} variant="filled" style={{width:"100%",backgroundColor:"#f2d357"}}/>
        </div>
    );
};

export default DTextField;