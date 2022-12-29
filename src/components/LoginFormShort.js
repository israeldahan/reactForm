import React, {useState} from 'react';
import * as yup from 'yup';

const INITIAL_VALUES = {
    email: '',
    password: '',
    city: '',
    checkboxColor: {
      green: false,
      blue: false
    },
    selectOption : 'option1'
  }

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    city: yup.string()
  });
  
const LoginFormShort = () => {

  const [form, setForm] = useState(INITIAL_VALUES)
  
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
    if (event.target.type == 'checkbox'){
      setForm({
        ...form,
        checkboxColor :{
          ...form.checkboxColor,  
          [event.target.id]: !form.checkboxColor[event.target.id]}    
    }) } else if (event.target.type == 'radio'){
      setForm({
        ...form,
        [event.target.name]: event.target.value
    })

    }else {
      setForm({
        ...form,
        [event.target.id]: event.target.value
    })
    }
    
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
      <div>
            <label >
                <input
                    id="blue"
                    name="checkboxColor"
                    type="checkbox"
                    checked={form.checkboxColor.blue}
                    onChange={handleChange}
                />
                Blue
                </label>
                <label>
                <input
                    id="green"
                    name="checkboxColor"
                    type="checkbox"
                    checked={form.checkboxColor.green}
                    onChange={handleChange}
                />
                Green
            </label>
        </div>

        <div className="radio">
      <label>
        <input type="radio" value="option1" name='selectOption'
                      checked={form.selectOption === 'option1'} 
                      onChange={handleChange} />
        Option 1
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2"  name='selectOption'
                      checked={form.selectOption === 'option2'} 
                      onChange={handleChange} />
        Option 2
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option3" name='selectOption'
                      checked={form.selectOption === 'option3'} 
                      onChange={handleChange} />
        Option 3
      </label>
    </div>


      <button type="submit">Submit</button>
      <a onClick={handleReset} href=""> RESET </a>
    </form>
  );
};

export default LoginFormShort ;