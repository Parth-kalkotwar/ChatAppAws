import React from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import './index.css'


function Home() {
    return (
        <div className = "App">
            <div className="app-header">
                <h1>Simple Chat Room</h1>
            </div>
            <div className = "buttons">
                <Button color = "secondary" variant = "contained" component = {Link} to = "/login">
                    Login
                </Button>
                <Button color = "primary" variant = "contained" component = {Link} to = "/register">
                    Register
                </Button>
            </div>
        </div>
    )
}

export default Home;