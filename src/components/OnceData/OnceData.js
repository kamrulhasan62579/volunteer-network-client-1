import React from 'react';

const OnceData = ({onceData}) => {
    console.log(onceData)
    return (
        <div>
            <h1>{onceData.email}, {onceData.event.name}</h1>
        </div>
    );
};

export default OnceData;