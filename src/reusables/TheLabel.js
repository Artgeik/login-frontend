import React from 'react';
import Label from './Label';

const TheLabel = (props) => {
    const {title,style}=props;
    return (
        <div style={style}>
            <Label style={{fontFamily:"Georgia"}} title={title} variant={"h2"}/>
        </div>
    );
};

export default TheLabel;