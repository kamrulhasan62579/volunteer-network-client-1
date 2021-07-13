import React, { useEffect, useState } from 'react';
import RegListData from '../RegListData/RegListData';

const RegisterList = () => {
    const [regList, setRegList] = useState([]);
    console.log(regList);
    useEffect(() => {
        fetch('http://localhost:4002/diffrentUser')
        .then(res => res.json())
        .then(data => setRegList(data))
    }, [])
    return (
        <div>
                        <h1>All users registation</h1>
            {
                regList.map(reg => <RegListData key={reg._id} reg={reg}></RegListData> )
            }
        </div>
    );
};

export default RegisterList;