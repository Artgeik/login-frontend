import React from 'react';
import { Typography } from '@mui/material';

const Label = (props) => {
    let {variant,title,style} =props;
    return (
        <div>
            <Typography variant={variant} style={style?style:{}} color="initial">{title}</Typography>
        </div>
    );
};

export default Label;