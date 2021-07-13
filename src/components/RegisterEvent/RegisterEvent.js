import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import OnceData from '../OnceData/OnceData'


const RegisterEvent = () => {
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const [findData, setFindData] = useState({});
    useEffect(() => {
      fetch(`https://vast-caverns-87711.herokuapp.com/find/${id}`)
      .then(res => res.json())
      .then(data => setFindData(data))
    }, [id])

    const onSubmit = data => {
      
        const newData = {...data, event: findData, ...loggedInUser};
        console.log(newData);
        fetch('https://vast-caverns-87711.herokuapp.com/regData', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    const [onceDatas, setOnceDatas] = useState([]);
     useEffect(() => {
       fetch(`https://vast-caverns-87711.herokuapp.com/regis/3?email=${loggedInUser.email}`)
       .then(res =>res.json())
       .then(data => setOnceDatas(data))
     }, [])
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="date" {...register("date", { required: true })} /> <br/>
        {errors.date && <span>Date is required</span>} <br/> <br/>
        
        <input type="submit"/>
      </form>
        
       <div>
         <h1>One Single person Data</h1>
          {
            onceDatas.map(dat => <OnceData key={dat._id} onceData={dat}></OnceData> )
          }
       </div>

      </div>
    );
};

export default RegisterEvent;