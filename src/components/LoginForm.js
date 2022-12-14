import React, {useState} from 'react';

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(`${email} and ${password}`)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
    console.log(`${email} and ${password}`)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
    console.log(`${email} and ${password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
        id="email" 
        type="text"
        value={email}
        onChange={handleEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
        id="password" 
        type="password" 
        value={password}
        onChange={handlePassword}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm ;