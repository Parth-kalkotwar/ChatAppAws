import React, {useState} from 'react'
import {Button, TextField} from '@material-ui/core'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    async function loginUser() {
        console.log("Herer")
        const response = await fetch("http://localhost:1337/api/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({email,password}) 
          }).then((t) => t.json());
          if(response.status === 'ok') {
              alert('You\'re now logged in')
          }
          console.log(response);
    }

    return (
        <div className="register-form">
            <h1>Login Form</h1>
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
            <Button color = "primary" variant="contained" onClick={loginUser}>
                Login
            </Button>
            </form>
        </div>
    )    
}

export default Login;