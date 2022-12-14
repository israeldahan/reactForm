import React, { useRef } from "react";


const LoginFormNew = () => {
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        //old way
        console.log("Ny Form")
        console.log(event.target.elements.email.value);
        console.log(event.target.elements.password.value);
        
        //new way

        const email = emailRef.current.value
        const password = passwordRef.current.value

        console.log(`our references is ${email} and ${password}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" ref={emailRef}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" ref={passwordRef}/>
            </div>
            <button type="submit">Submit</button>

        </form>
    )

}


export default LoginFormNew;