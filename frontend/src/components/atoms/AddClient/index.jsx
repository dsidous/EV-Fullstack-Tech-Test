import React, {useState} from 'react';

import { AddClientForm } from './styles';

const isEmpty = (empty) => Object.keys(empty).length === 0 && empty.constructor === Object;

const AddClient = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEmpty(inputs)) {
      return;
    };

    
    onSubmit({
      ...inputs,
      createdDate: Date.now(),
    });
    setInputs({});
  }

  return (
    <AddClientForm onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange}  value={inputs.name || ""} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} value={inputs.email || ""}/>
      <input type="text" name="company" placeholder="Company" onChange={handleChange} value={inputs.company || ""}/>
      <button type="submit">Add</button>
    </AddClientForm>
  )
};

export default AddClient;
