import React from 'react';

const RegListData = ({reg}) => {
    console.log(reg);
    return (
        <div>
            <h4>Name: {reg.displayName}, Email: {reg.email}</h4>

        </div>
    );
};

export default RegListData;