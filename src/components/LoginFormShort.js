import React, {useState} from 'react';
import * as yup from 'yup';

const INITIAL_VALUES = {
    email: '',
    password: '',
    city: ''
  }

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    city: yup.string()
  });
  
const LoginFormShort = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
    city: ''
  })
  
  const handleSubmit = async (event) => {
      event.preventDefault()
      console.log(form )
      //setForm(INITIAL_VALUES)

      let isValid = await schema.isValid(form)
      console.log(`isValid ${isValid}`);

      let errors = await schema.validate(form)
      console.log(`errors`);
      console.log(errors);

  }

  const handleChange = (event) => {
    setForm({
        ...form,
        [event.target.id]: event.target.value
    })
  }

  const handleReset = () => {
    setForm(INITIAL_VALUES)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
        id="email" 
        type="text"
        value={form.email}
        onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
        id="password" 
        type="password" 
        value={form.password}
        onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input 
        id="city" 
        type="text" 
        value={form.city}
        onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
      <a onClick={handleReset} > RESET </a>
    </form>
  );
};

export default LoginFormShort ;