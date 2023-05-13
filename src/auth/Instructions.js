import React from 'react';

const Instructions = (props) => {
    const {inst,style}=props;
    return (
        <div style={style}>
            <ul>
                {inst.map((item,index)=><li>{item}</li>)}
            </ul>
        </div>
    );
};

export default Instructions;