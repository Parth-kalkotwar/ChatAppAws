import React, {useState} from 'react'
import {Button, TextField} from '@material-ui/core'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    
    async function registerUser() {
        console.log("Herer")
        const response = await fetch("http://localhost:1337/api/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({email,password}) // body data type must match "Content-Type" header
          }).then((t) => t.json());
          console.log(response);

    }

    return (
        <div className="register-form">
            <h1>Register Form</h1>
            <form>
            <TextField required id="standard-required" label="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <br />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button color = "primary" variant="contained" onClick={registerUser}>
                Register
            </Button>
            </form>
        </div>
    )    
}

export default Register;