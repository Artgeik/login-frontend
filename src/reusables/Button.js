import React from 'react';
import Button from '@mui/material/Button'

const button = (props) => {
    let {sty,label,handle} =props;
    return (
        <div>
            <Button onClick={handle} style={sty} variant="contained" color="primary">{label}</Button>
        </div>
    );
};

export default button;