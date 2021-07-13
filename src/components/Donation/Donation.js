import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Donation() {

  const [img, setImg] = useState()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const newData = {...data, image: img}
    console.log(newData);
    fetch('https://vast-caverns-87711.herokuapp.com/addEvent', {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

const handleImgUpload = event =>{
    const imgData = new FormData();
     imgData.set('key', '1bd00e862199c45a4d68f999e88ff763');
     imgData.append('image', event.target.files[0])
     axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Event Name" {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>} <br></br>
       
       
      <input type="date" {...register("date", { required: true })} />
      {errors.date && <span>Date is required</span>} <br></br>

      <textarea placeholder="Description" name="" id="" cols="30" rows="10" {...register("description", { required: true })}></textarea> 
      {errors.description && <span>Description is required</span>} <br></br>

      <input onChange={handleImgUpload} type="file" />
      <br></br>



      <input type="submit" />
    </form>
  );
}